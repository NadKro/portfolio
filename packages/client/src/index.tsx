import './index.css'

import type { JSX } from 'preact'
import { render } from 'preact'
import {
  useEffect,
  useState,
} from 'preact/compat'
import type { Richtext } from 'storyblok-js-client'

import { fetchStoryById } from './api/storyblok.client'
import { AnchorComponent } from './components/anchor'
import { GalleryComponent } from './components/gallery'
import { HeaderComponent } from './components/header'
import { NavigationComponent } from './components/navigation'
import { ReferenceListComponent } from './components/reference-list'
import { RichTextComponent } from './components/rich-text'
import { WorkComponent } from './components/work'
import type {
  About,
  Header,
  References,
  Work,
} from './types/blocks'
import type { HomePage } from './types/pages'
import { isError } from './util/is-error-guard'

// eslint-disable-next-line max-lines-per-function
const Page = (): JSX.Element => {
  const [header, setHeader] = useState({} as Header)
  const [about, setAbout] = useState([] as About)
  const [work, setWork] = useState([] as Work)
  const [references, setReferences] = useState([] as References)
  const [imprint, setImprint] = useState({} as Richtext)
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
        setWork(homePage.content.work)
        setReferences(homePage.content.references)
        setImprint(homePage.content.imprint)
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
    <section id='work' class='px-4 lg:px-24 mt-20 text-slate-900 dark:text-slate-100'>
      <div class='container'>
        <h3
          class='group mt-10 mb-10'
        >
          <a href='#work' role='heading' aria-level='3'
            class='font-fira font-bold font text-lg underline underline-offset-8 decoration-4 decoration-cyan-900 dark:decoration-amber-300 text-slate-900 dark:text-white'
          >Work</a>
          <span class='ml-2 hidden group-hover:inline fill-cyan-900/50 dark:fill-amber-300/50'>
            <AnchorComponent />
          </span>
        </h3>
        <WorkComponent items={work}/>
      </div>
    </section>
    <section id='references' class='px-4 lg:px-24 mt-20 text-slate-900 dark:text-slate-100'>
      <div class='container'>
        <h3
          class='group mt-10 mb-10'
        >
          <a href='#references' role='heading' aria-level='3'
            class='font-fira font-bold font text-lg underline underline-offset-8 decoration-4 decoration-cyan-900 dark:decoration-amber-300 text-slate-900 dark:text-white'
          >References</a>
          <span class='ml-2 hidden group-hover:inline fill-cyan-900/50 dark:fill-amber-300/50'>
            <AnchorComponent />
          </span>
        </h3>
        <ReferenceListComponent items={references} />
      </div>
    </section>
    <section id='imprint' class='px-4 lg:px-24 mt-20 text-slate-900 dark:text-slate-100'>
      <div class='container'>
        <h3
          class='group mt-10 mb-10'
        >
          <a href='#imprint' role='heading' aria-level='3'
            class='font-fira font-bold mt-10 mb-10 font text-lg underline underline-offset-8 decoration-4 decoration-cyan-900 dark:decoration-amber-300 text-slate-900 dark:text-white'>Imprint</a>
          <span class='ml-2 hidden group-hover:inline fill-cyan-900/50 dark:fill-amber-300/50'>
            <AnchorComponent />
          </span>
        </h3>
        <div class='pb-10 md:max-w-md'>
          <RichTextComponent content={imprint} />
        </div>
      </div>
    </section>
  </div>
}

render(<Page />, document.body)
