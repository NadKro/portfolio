import type { AxiosInstance } from 'axios'
import axios from 'axios'

import { isError } from '../util/is-error-guard'
import * as cache from './storyblok.cache'
import { setSpaceVersion } from './storyblok.cache'
import type {
  StoryblokProfile,
  StoryblokStory,
} from './storyblok.types'
import type { StoryblokStoriesResponse } from './storyblok.types'

const publicApiKey = 'ymqkZO04fHAQCe2rqZMq9Qtt'
const baseURL = 'https://api.storyblok.com/'
const client = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
})

async function sendCall<T>(sbClient: AxiosInstance, apiKey: string, cacheKey: string | undefined, target: string): Promise<T | Error> {
  try {
    const response = await sbClient.get<T>(`${target}?version=published&token=${apiKey}&cv=${cacheKey}`)
    return response.data
  } catch (e) {
    const error = e as Error
    return new Error(`Failed to retrieve data from Storyblock API: ${error.message}`)
  }
}

async function getStoryblockProfile(sbClient: AxiosInstance): Promise<StoryblokProfile | Error> {
  return sendCall<StoryblokProfile>(sbClient, publicApiKey, undefined, '/v1/cdn/spaces/me')
}

async function getSpaceVersion(sbClient: AxiosInstance): Promise<string> {
  const storedSpaceVersion = cache.getSpaceVersion()
  if (storedSpaceVersion) {
    return storedSpaceVersion
  }

  const fetchedProfile = await getStoryblockProfile(sbClient)
  if (!isError(fetchedProfile)) {
    const fetchedSpaceVersion = fetchedProfile.space.version.toString()
    setSpaceVersion(fetchedSpaceVersion)
    return fetchedSpaceVersion
  }

  return new Date().getTime().toString()
}

export async function fetchAllStories(): Promise<StoryblokStory<unknown>[] | Error> {
  const cacheKey = await getSpaceVersion(client)
  const response = await sendCall<StoryblokStoriesResponse>(client, publicApiKey, cacheKey, '/v2/cdn/stories')
  if (isError(response)) {
    return response
  }
  return response.stories
}
