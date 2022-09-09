import * as LRU from 'lru-cache'

const cache = new LRU({
  max: 100,
  ttl: 1000 * 60 * 10, // 10 min
})

const predefinedKeys = { spaceVersion: 'spaceVersion' }

export function getSpaceVersion(): string | undefined {
  if (cache.has(predefinedKeys.spaceVersion)) {
    return cache.get(predefinedKeys.spaceVersion)
  }
  return undefined
}

export function setSpaceVersion(cipher: string): void {
  cache.set(predefinedKeys.spaceVersion, cipher)
}

