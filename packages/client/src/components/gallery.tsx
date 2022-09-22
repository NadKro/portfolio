import type { FunctionalComponent } from 'preact'
import type { JSX } from 'preact'

import type { ImageAsset } from '../types/blocks'

interface GalleryItem {
  essence: ImageAsset
  title: string
  teaser: string
}

export interface GalleryComponentProperties {
 items: GalleryItem[]
}

function getSizeParam(maxWidth: number | undefined, maxHeight: number | undefined): string | undefined {
  if (maxWidth && maxHeight) {
    return `${maxWidth}x${maxHeight}`
  }
  if (maxWidth) {
    return `${maxWidth}x0`
  }
  if (maxHeight) {
    return `0x${maxHeight}`
  }
  return undefined
}

const displayImage = (image: GalleryItem, maxWidth: number|undefined, maxHeight: number|undefined): JSX.Element => {
  const sizeParam = getSizeParam(maxWidth, maxHeight)
  return <img
    src={image.essence.filename + `/m/${sizeParam}/smart`}
    alt={image.title}
    className='inset-0 h-full w-full object-cover object-center rounded opacity-100 hover:opacity-50'
  />
}

const overlay = (image: GalleryItem): JSX.Element => <div
  className='absolute top-0 left-0 right-0 rounded bg-gray-800 opacity-80 h-full text-center hidden group-hover:flex flex-col align-middle justify-center'
>
  <p className='px-4 text-lg font-fira text-white leading-4'>{image.title}</p>
  <p className='mt-2 px-4 text-md font-fira text-white leading-4'>{image.teaser}</p>
</div>

const template1 = (image: GalleryItem | undefined): JSX.Element => <div className='image1 group relative w-full row-span-2'>
  {image && displayImage(image, 280, 810)}
  {image && overlay(image)}
</div>

const template2 = (image: GalleryItem | undefined): JSX.Element => <div className='image2 group relative w-full col-span-2 row-span-2'>
  {image && displayImage(image, 560, 810)}
  {image && overlay(image)}
</div>

const template3 = (image: GalleryItem | undefined): JSX.Element => <div className='image3 group relative w-full'>
  {image && displayImage(image, 280, 405)}
  {image && overlay(image)}
</div>

const template4 = (image: GalleryItem | undefined): JSX.Element => <div className='image4 group relative w-full'>
  {image && displayImage(image, 280, 405)}
  {image && overlay(image)}
</div>

const template5 = (image: GalleryItem | undefined): JSX.Element => <div className='image5 group relative w-full col-span-2 row-span-2'>
  {image && displayImage(image, 560, 810)}
  {image && overlay(image)}
</div>

const template6 = (image: GalleryItem | undefined): JSX.Element => <div className='image6 group relative w-full col-span-2'>
  {image && displayImage(image, 560, 405)}
  {image && overlay(image)}
</div>

const template7 = (image: GalleryItem | undefined): JSX.Element => <div className='image7 group relative w-full'>
  {image && displayImage(image, 280, 405)}
  {image && overlay(image)}
</div>

const template8 = (image: GalleryItem | undefined): JSX.Element => <div className='image8 group relative w-full'>
  {image && displayImage(image, 280, 405)}
  {image && overlay(image)}
</div>

export const GalleryComponent: FunctionalComponent<GalleryComponentProperties> = (galleryComponentProperties: GalleryComponentProperties) => {
  return <div class='container'>
    <div className='grid grid-cols-4 grid-rows-4 grid-flow-col gap-2' style='max-height: 1620px'>
      {template1(galleryComponentProperties.items?.[0])}
      {template2(galleryComponentProperties.items?.[1])}
      {template3(galleryComponentProperties.items?.[2])}
      {template4(galleryComponentProperties.items?.[3])}
      {template5(galleryComponentProperties.items?.[4])}
      {template6(galleryComponentProperties.items?.[5])}
      {template7(galleryComponentProperties.items?.[6])}
      {template8(galleryComponentProperties.items?.[7])}
    </div>
  </div>
}
