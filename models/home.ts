import { PageComponent, PageMedia } from "."

export type HomePageContent = {
    page: PageComponent[],
    bg?: PageMedia,
    bookADemoText: string,
    created_at: string,
    id: number,
    published_at: string,
    showMeAroundText: string,
    subtitle: string,
    title: string,
    updated_at: string,
    video?: PageMedia
}



