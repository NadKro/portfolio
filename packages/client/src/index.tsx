import './index.css'

import type { JSX } from 'preact'
import { render } from 'preact'
import {
  useEffect,
  useState,
} from 'preact/compat'

import { fetchStoryById } from './api/storyblok.client'
import { HeaderComponent } from './components/header'
import { NavigationComponent } from './components/navigation'
import type { Header } from './types/blocks'
import type { HomePage } from './types/pages'
import { isError } from './util/is-error-guard'

// eslint-disable-next-line max-lines-per-function
const Page = (): JSX.Element => {
  const [header, setHeader] = useState({} as Header)
  const menuItems = [
    {
      title: 'About',
      target: '#about',
      active: true,
    },
    {
      title: 'Work',
      target: '#work',
      active: false,
    },
    {
      title: 'References',
      target: '#references',
      active: false,
    },
    {
      title: 'Imprint',
      target: '#imprint',
      active: false,
    },

  ]

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const homePage = await fetchStoryById<HomePage>('home')
      if (!isError(homePage)) {
        setHeader(homePage.content.header[0])
      }
    }
    void fetchData()
  }, [])

  return <div class='w-full lg:container lg:mx-auto h-full min-h-screen bg-white dark:bg-zinc-900 border-x border-slate-100 dark:border-zinc-800'>
    <NavigationComponent items={menuItems} />
    <HeaderComponent avatar={header.avatar} teaser={header.teaser} social={header.social}/>
    <div id='main' class='px-4 lg:px-24 text-slate-900 dark:text-slate-100'>
      <p>[content]</p>
    </div>
  </div>
}

render(<Page />, document.body)
