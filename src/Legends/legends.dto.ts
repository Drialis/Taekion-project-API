import { Competitor, ImageType } from "./legends.types"

export class CreateLegendDto {
  name: string = ''
  mainText: string = ''
  paragraphs: string[] = []
  images: ImageType[] = []
  isCompetitor?: Competitor
  dateDan: number = 1980
}