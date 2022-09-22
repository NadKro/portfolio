import './index.css'

import type { JSX } from 'preact'
import { render } from 'preact'
import {
  useEffect,
  useState,
} from 'preact/compat'

import { fetchStoryById } from './api/storyblok.client'
import { AnchorComponent } from './components/anchor'
import { GalleryComponent } from './components/gallery'
import { HeaderComponent } from './components/header'
import { NavigationComponent } from './components/navigation'
import type {
  About,
  Header,
} from './types/blocks'
import type { HomePage } from './types/pages'
import { isError } from './util/is-error-guard'

// eslint-disable-next-line max-lines-per-function
const Page = (): JSX.Element => {
  const [header, setHeader] = useState({} as Header)
  const [about, setAbout] = useState([] as About)
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
        setAbout(homePage.content.about)
      }
    }
    void fetchData()
  }, [])

  return <div class='w-full lg:container lg:mx-auto h-full min-h-screen bg-white dark:bg-zinc-900 border-x border-slate-100 dark:border-zinc-800'>
    <NavigationComponent items={menuItems} />
    <HeaderComponent avatar={header.avatar} teaser={header.teaser} social={header.social}/>
    <section id='about' class='px-4 lg:px-24 mt-20 text-slate-900 dark:text-slate-100'>
      <div class='container'>
        <h3
          class='group mt-10 mb-10'
        >
          <a href='#about' role='heading' aria-level='3'
            class='font-fira font-bold font text-lg underline underline-offset-8 decoration-4 decoration-cyan-900 dark:decoration-amber-300 text-slate-900 dark:text-white'
          >Photography</a>
          <span class='ml-2 hidden group-hover:inline fill-cyan-900/50 dark:fill-amber-300/50'>
            <AnchorComponent />
          </span>
        </h3>
        <GalleryComponent items={about} />
      </div>
    </section>
  </div>
}

render(<Page />, document.body)
