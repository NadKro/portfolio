import type { FunctionalComponent } from 'preact'

export interface SocialMediaLinkoutProperties {
  title: string
  icon: string
  link: {
    url: string
  }
}

export const SocialMediaLinkout: FunctionalComponent<SocialMediaLinkoutProperties> = (props: SocialMediaLinkoutProperties) => {
  return <div id={props.title} class='stroke-slate-600 hover:stroke-cyan-900 dark:stroke-zinc-500 dark:hover:stroke-amber-300 cursor-pointer'>
    <a aria-label={props.title} href={props.link?.url} dangerouslySetInnerHTML={{ __html: props.icon }} target='_blank' rel='noreferrer'/>
  </div>
}
