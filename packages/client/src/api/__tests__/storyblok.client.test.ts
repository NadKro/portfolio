import * as nock from 'nock'

import {
  fetchAllStories,
} from '../storyblok.client'
import {
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
