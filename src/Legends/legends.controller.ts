import { Controller, Post, Body, Res, HttpStatus, Get } from '@nestjs/common';
import { LegendsService } from './legends.service';
import { CreateLegendDto } from './legends.dto';
import { Response } from 'express'

@Controller('legends')
export class LegendsController {
  constructor(private readonly legendsService: LegendsService) {}

  @Get()
  async getAllLegends(
    @Res() res: Response
  ): Promise<Response>{
    try{
      const legends = this.legendsService.getAllLegends()
      return res.status(HttpStatus.OK).json(legends)
    } catch (error: any){
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'No hay leyendas forjadas',
        error: error.message
      })
    }
  }

  @Post()
  async addLegend(
    @Res() res: Response,
    @Body() createLegendDto: CreateLegendDto
    ): Promise<Response> {
        try{
            const createLegendResponse = 
            await this.legendsService.incorporateLegend(createLegendDto)
            return res.status(HttpStatus.CREATED).json(createLegendResponse);
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error al añadir la leyenda',
        error: error.message
      });
      }
  }
}
