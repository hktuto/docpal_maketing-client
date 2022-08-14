import { PageMedia } from ".";

export type PageFeature = {
    id: number,
    title: string,
    icon? : PageMedia,
    content: string,
    featureImg?: PageMedia,
    bgImg ?: PageMedia,
    featureImgDark? : PageMedia
}