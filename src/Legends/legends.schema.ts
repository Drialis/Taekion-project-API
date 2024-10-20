import { Schema, Document } from "mongoose";

export interface Legend extends Document {
    name: string,
    mainText: string,
    paragraphs: string[],
    images: {url: string, alt: string} []
    isCompetitor?: {
        kiorugui: boolean,
        poomsae: boolean
    },
    dateDan: number
}

export interface ImageType {
  url: string;
  alt: string;
}

export interface Competitor {
  kiorugui: boolean;
  poomsae: boolean;
}

const LegendsSchema = new Schema({
  name: { type: String, required: true },
  mainText: { type: String, required: true },
  paragraphs: [{ type: String }],
  images: [
    {
      url: { type: String, required: true },
      alt: { type: String, required: true }
    }
  ],
  isCompetitor: {
    kiorugui: { type: Boolean, default: false },
    poomsae: { type: Boolean, default: false }
  },
  dateDan: { type: Number, required: true }
});

export default LegendsSchema;
