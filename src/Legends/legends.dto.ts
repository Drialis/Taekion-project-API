import { ImageType } from "./legends.types"

export class CreateLegendDto {
  name: string
  mainText: string
  paragraphs: string[]
  images: ImageType[]
  isCompetitor: boolean
  dateDan: Date
}