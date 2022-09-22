import type { FunctionalComponent } from 'preact'
import type { JSX } from 'preact'

import type { ImageAsset } from '../types/blocks'

interface WorkReference {
  title: string
  teaser: string
  essence: ImageAsset
}

export interface WorkComponentProps {
  items: WorkReference[]
}

const renderOdd = (ref: WorkReference): JSX.Element => <div className='flex flex-col lg:flex-row mb-10'>
  <div className='basis-1/5 mb-4 lg:pr-6 lg:border-r-2 border-slate-100'>
    <p className='font-bold'>{ref.title}</p>
    <p>{ref.teaser}</p>
  </div>
  <div className='order-last basis-4/5 lg:pl-6'>
    <img alt={ref.title} class='max-h-screen' src={`${ref.essence.filename}/m/1024x0/smart`} />
  </div>
</div>

const renderEven = (ref: WorkReference): JSX.Element => <div className='flex flex-col lg:flex-row-reverse mb-10'>
  <div className='basis-1/5 mb-4 lg:pl-6 lg:border-l-2 border-slate-100'>
    <p className='font-bold'>{ref.title}</p>
    <p>{ref.teaser}</p>
  </div>
  <div className='basis-4/5 lg:pr-6'>
    <img alt={ref.title} class='max-h-screen' src={`${ref.essence.filename}/m/1024x0/smart`} />
  </div>
</div>

export const WorkComponent: FunctionalComponent<WorkComponentProps> = (props: WorkComponentProps) => {
  return <div>
    { props.items?.map((item, index) => index % 2 ? renderEven(item) : renderOdd(item)) }
  </div>
}
