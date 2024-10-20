import { ImageType } from "../Legends/legends.schema"

export interface NewCardType extends Pick<NewDetailsType, 'title' | 'mainText'> {
    image: NewDetailsType['images'][0]
}

export interface NewDetailsType {
    title: string
    mainText: string
    paragraphs: string[]
    images: ImageType[]
    date: Date
}
