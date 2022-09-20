import type { FunctionalComponent } from 'preact'

export interface NavigationItemProperties {
  title: string
  target: string
  active: boolean
}

export const NavigationItemComponent: FunctionalComponent<NavigationItemProperties> = (props: NavigationItemProperties) => {
  return <a href={props.target} className='relative block px-6 py-2 inset-x-1 font-fira text-center text-sm text-slate-900 hover:text-cyan-900 hover:dark:text-amber-300 dark:text-white'>
    {props.title}
    {props.active
      && <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r dark:from-amber-400/0 dark:via-amber-400/40 dark:to-amber-400/0'></span>
    }
  </a>
}
