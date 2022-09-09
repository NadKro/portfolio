export interface StoryblokProfile {
  space: {
    id: number
    name: string
    version: number
  }
}

export interface StoryblokStoriesResponse {
  cv: number
  stories: StoryblokStory[]
}

export interface StoryblokStory {
  id: number
  name: string
}
