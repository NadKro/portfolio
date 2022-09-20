export interface StoryblokProfile {
  space: {
    id: number
    name: string
    version: number
  }
}

export interface StoryblokStoriesResponse {
  cv: number
  stories: StoryblokStory<unknown>[]
}

export interface StoryblokStoryResponse<T> {
  cv: number
  story: StoryblokStory<T>
}

export interface StoryblokStory<T> {
  id: number
  name: string
  content: T
}
