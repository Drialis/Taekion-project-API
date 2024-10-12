export interface LegendsDetailsType {
    name: string,
    mainText: string,
    paragraphs: string[],
    images: ImageType[]
    isCompetitor: boolean
    dateDan: Date
}

export interface LegendsCardType extends Pick
<LegendsDetailsType, 
'name' | 
'mainText' | 
'isCompetitor' 
>
{
    image: LegendsDetailsType['images'][0]
}

export interface ImageType{
    url: string
    alt: string
}