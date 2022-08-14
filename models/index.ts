import { PageColumn } from "./column"
import { PageFeature } from "./feature"
import { PageSlide } from "./slide";

export type ComponentType = "feature-card.feature-row" | "basic.row" | "slide.slidershow" | "basic.header" | "basic.spacing";

export type PageComponent = {
    __component: ComponentType,
    id: number,
    fullWidth ?:boolean,
    title?: string
    columns? : PageColumn[],
    card?: PageFeature[],
    slide?: PageSlide[],
    bg?: PageMedia
    darkBg?: PageMedia
    buttonA?: string
    buttonB?: string
    subtitle?: string
    thumbnail?: PageMedia
    video?: PageMedia
    bgColor?: string
    featureType?: 'grid' | 'slide'
    height?: number,
    size?: 'mini' | 'small' | 'normal' | 'big' | 'mega'
}

export type PageMedia = {
    alternativeText: string
    caption: string
    created_at: string
    ext: string
    formats?: {
        medium: MediaThumbnail,
        small: MediaThumbnail,
        thumbnail :MediaThumbnail
    },
    hash: string
    height: null
    id: number
    mime: string
    name: string
    previewUrl: string
    provider: string
    provider_metadata: string
    size: number
    updated_at: string
    url: string
    width: string
}

export type MediaThumbnail = {
    ext: string
    hash: string
    height: number
    mime: string
    name: string
    path: null
    size: number
    url: string
    width: number  
}

export type PageContent = {
    id: number,
    page: PageComponent[],
    slug:string,
    title:string,
    description: string,

}