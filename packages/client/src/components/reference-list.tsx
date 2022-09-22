import type { FunctionalComponent } from 'preact'

import type { ImageAsset } from '../types/blocks'

interface ReferenceItem {
  title: string
  logo: ImageAsset
}

export interface ReferenceListComponentProperties {
  items: ReferenceItem[]
}

export const ReferenceListComponent: FunctionalComponent<ReferenceListComponentProperties> = (props: ReferenceListComponentProperties) => {
  return <div className='flex flex-wrap gap-10'>
    {props.items.map((reference) => {
      return <div class='flex-none relative basis-60 bg-slate-900 dark:bg-gray-600 rounded h-40 hover:drop-shadow-md hover:scale-105'>
        <img class='mt-6 mx-auto w-40 h-28' alt={reference.title} src={reference.logo.filename} />
      </div>
    })}

  </div>
}
