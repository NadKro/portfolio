export type SocialMediaLink = {
  title: string
  icon: string
  link: {
    url: string
  }
}

export type ImageAsset = {
  alt: string
  title: string
  filename: string
}

export type Header = {
  avatar: ImageAsset
  teaser: string
  social: SocialMediaLink[]
}

export type WorkSample = {
  title: string
  teaser: string
  essence: ImageAsset
}

export type About = WorkSample[]

export type Work = WorkSample[]

export type Reference = {
  title: string
  logo: ImageAsset
}

export type References = Reference[]
