import type { FunctionalComponent } from 'preact'

import type {
  ImageAsset,
  SocialMediaLink,
} from '../types/blocks'
import { SocialMediaLinkout } from './social-media-linkout'

export interface HeaderProperties {
  avatar: ImageAsset
  teaser: string
  social: SocialMediaLink[]
}

export const HeaderComponent: FunctionalComponent<HeaderProperties> = (props: HeaderProperties) => {
  return <div id='hero' className='px-4 md:max-w-4xl lg:px-24 mb-8'>
    {props.avatar
      && <div>
        <img className='inline-block h-16 w-16 rounded-full ring-1 ring-slate-100 float-left select-none' alt={props.avatar.alt}
          title={props.avatar.title} src={`${props.avatar.filename}/m/128x128/smart`}
        />
        <div className='ml-24'>
          <h1 className='pd-2 pb-2 text-4xl font-lexend font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-100 dark:to-slate-300'>{props.teaser}</h1>
          <div id='sm-icons' className='mt-2 flex gap-2'>
            {props.social.map((socialMediaLink) => {
              return <SocialMediaLinkout title={socialMediaLink.title} icon={socialMediaLink.icon} link={socialMediaLink.link} />
            })}
          </div>
        </div>
      </div>
    }
  </div>
}
