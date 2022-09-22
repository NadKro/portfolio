import type { Richtext } from 'storyblok-js-client'

import type {
  About,
  Header,
  References,
  Work,
} from './blocks'

export type HomePage = {
  header: Header[]
  about: About
  work: Work
  references: References
  imprint: Richtext
}
