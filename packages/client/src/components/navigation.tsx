import type { FunctionalComponent } from 'preact'

import { DarkModeToggleComponent } from './dark-mode-toggle'
import { NavigationItemComponent } from './navigation-item'

export interface NavigationComponentProperties {
  items: {
    title: string
    target: string
    active: boolean
  }[]
}

export const NavigationComponent: FunctionalComponent<NavigationComponentProperties> = (props: NavigationComponentProperties) => {
  return <div id='navbar' className='flex flex-row pt-4 mb-8 md:mb-20'>
    <div className='basis-0 md:basis-1/4 hidden md:block'></div>
    <div className='hidden md:block basis-full md:basis-1/2 mx-4' role='navigation'>
      <nav className='display-block md:flex justify-left md:justify-center'>
        <ul
          className='md:flex rounded-lg md:rounded-full shadow-sm md:shadow-md shadow-slate-100 ring-1 ring-slate-100 dark:ring-zinc-700 dark:bg-zinc-800/50'
        >
          {props.items.map((item) => {
            return <li><NavigationItemComponent title={item.title} target={item.target} active={item.active}/></li>
          })
          }
        </ul>
      </nav>
    </div>
    <div className='basis-0 md:basis-1/4 hidden md:block'>
      <DarkModeToggleComponent />
    </div>
  </div>
}
