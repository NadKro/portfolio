import type { Richtext } from 'storyblok-js-client'

import type {
  About,
  Header,
  Work,
} from './blocks'

export type HomePage = {
  header: Header[]
  about: About
  work: Work
  imprint: Richtext
}
