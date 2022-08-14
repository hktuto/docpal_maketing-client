
export type ChildItem = {
    created_at: string
    description?: string
    id: number
    menu_child?: number
    menu_link?: number 
    next_page?: number
    page: any[]
    prev_page?: number
    published_at: string
    slug: string
    title: string
    updated_at: string
}

export type MenuItem = {
    child: ChildItem[],
    created_at: string
    id: number
    label: string
    link?: ChildItem
    order: number
    published_at: string
    updated_at: string
    slug?: string
}