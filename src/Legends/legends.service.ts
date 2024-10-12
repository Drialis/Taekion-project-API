import { Injectable } from '@nestjs/common';
import { LegendsDetailsType } from './legends.types';
import { CreateLegendDto } from './legends.dto';
import { writeFileSync } from 'fs';

@Injectable()
export class LegendsService {
  private legends: LegendsDetailsType[] = [];

  getAllLegends(): LegendsDetailsType[] {
    return this.legends;
  }

  incorporateLegend(createLegendDto: CreateLegendDto): 
  LegendsDetailsType {
    const newLegend: LegendsDetailsType = {
      ...createLegendDto,
    };

    this.legends.push(newLegend);

    return newLegend;
  }

  private writeJsonFile(data: LegendsDetailsType[]){
    try{
        writeFileSync('response.json', JSON.stringify(data))
    } catch(err) {
        console.error('no encuentro leyendas por aquí', err)
    }
  }
}
