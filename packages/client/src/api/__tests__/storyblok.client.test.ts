import * as nock from 'nock'

import type { HomePage } from '../../types/pages'
import {
  fetchAllStories,
  fetchStoryById,
} from '../storyblok.client'
import {
  homePageResponse,
  profileResponse,
  storiesResponse,
} from './storyblok.samples'

describe('fetchAll', () => {
  it('fetches all stories successfully', async () => {
    nock('https://api.storyblok.com')
      .get('/v1/cdn/spaces/me')
      .query(true)
      .reply(200, profileResponse)
      .get('/v2/cdn/stories')
      .query(true)
      .reply(200, storiesResponse)

    const response = await fetchAllStories()

    expect(response).toMatchObject([
      {
        id: 186250366,
        name: 'Home',
      },
    ])
  })
})

describe('fetchById', () => {
  it('fetches a single story by slug', async () => {
    nock('https://api.storyblok.com')
      .get('/v1/cdn/spaces/me')
      .query(true)
      .reply(200, profileResponse)
      .get('/v2/cdn/stories/home')
      .query(true)
      .reply(200, homePageResponse)

    const response = await fetchStoryById<HomePage>('home')

    expect(response).toMatchObject({ name: 'Home' })
  })

  it('returns an error if the story cannot be fetched', async () => {
    nock('https://api.storyblok.com')
      .get('/v1/cdn/spaces/me')
      .query(true)
      .reply(200, profileResponse)
      .get('/v2/cdn/stories/home')
      .query(true)
      .reply(404)

    const response = await fetchStoryById<HomePage>('home')

    expect(response).toMatchObject(new Error('Failed to retrieve data from Storyblock API: Request failed with status code 404'))
  })
})
