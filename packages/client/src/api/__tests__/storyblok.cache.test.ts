import {
  getSpaceVersion,
  setSpaceVersion,
} from '../storyblok.cache'

describe('Storyblok cache', () => {
  it('caches the profile version / cache key', () => {
    const cacheKey = 'foobar'

    setSpaceVersion(cacheKey)

    expect(getSpaceVersion()).toEqual(cacheKey)
  })
})
