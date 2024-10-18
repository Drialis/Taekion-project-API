import { Injectable } from '@nestjs/common';
import { LegendsDetailsType } from './legends.types';
import { CreateLegendDto } from './legends.dto';
import { writeFileSync, readFileSync, existsSync } from 'fs';

@Injectable()
export class LegendsService {
  private legends: LegendsDetailsType[] = [];

  constructor() {
    // Cargar leyendas desde el archivo al iniciar el servicio, si el archivo existe.
    if (existsSync('response.json')) {
      const data = readFileSync('response.json', 'utf-8');
      this.legends = JSON.parse(data) || [];
    }
  }

  // Obtener todas las leyendas desde el archivo
  getAllLegends(): LegendsDetailsType[] {
    return this.legends;
  }

  // Incorporar una nueva leyenda
  incorporateLegend(createLegendDto: CreateLegendDto): LegendsDetailsType {
    const newLegend: LegendsDetailsType = {
      ...createLegendDto,
    };

    // Agregar la nueva leyenda al array
    this.legends.push(newLegend);

    // Guardar el array actualizado en el archivo response.json
    this.writeJsonFile();

    return newLegend;
  }

  // Método para escribir las leyendas en un archivo JSON
  private writeJsonFile() {
    try {
      writeFileSync('response.json', JSON.stringify(this.legends, null, 2)); // Con formato legible
    } catch (err) {
      console.error('Error al escribir el archivo JSON', err);
    }
  }
}
