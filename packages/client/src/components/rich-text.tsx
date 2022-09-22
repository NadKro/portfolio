import type { FunctionalComponent } from 'preact'
import type { Richtext } from 'storyblok-js-client'
import Storyblok from 'storyblok-js-client'

export interface RichTextComponentProperties {
 content: Richtext
}

export const RichTextComponent: FunctionalComponent<RichTextComponentProperties> = (props: RichTextComponentProperties) => {
  const storyblok = new Storyblok({},'')
  return <div class='space-y-6' dangerouslySetInnerHTML={{ __html: storyblok.richTextResolver.render(props.content) }} />
}
