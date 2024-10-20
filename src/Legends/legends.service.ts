import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Legend } from './legends.schema';
import { CreateLegendDto } from './legends.dto';
import { writeFileSync } from 'fs';

@Injectable()
export class LegendsService {

  constructor(
      @InjectModel('Legend') private legendModel: Model<Legend>
    ) {}
      

  // Obtener todas las leyendas desde el archivo
  async getAllLegends(): Promise<Legend[]>{
    const legends =  await this.legendModel.find().exec()
    this.writeJsonFile(legends)
    return legends
  } 

  // Incorporar una nueva leyenda
  async incorporateLegend(createLegendDto: CreateLegendDto): Promise<Legend>{
    const newLegend = new this.legendModel(createLegendDto)
    const savedLegend = await newLegend.save()
    const allLegends = await this.legendModel.find().exec()
    this.writeJsonFile(allLegends)
    return savedLegend
    };


    // Método para escribir las leyendas en un archivo JSON
  private writeJsonFile(legends: Legend[]) {
    try {
      writeFileSync('response.json', JSON.stringify(legends, null, 2)); // Formato legible
    } catch (err) {
      console.error('Error al escribir el archivo JSON', err);
    }
  }
}