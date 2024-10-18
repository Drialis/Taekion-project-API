import { Response } from 'express'
import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { LegendsService } from './legends.service';
import { CreateLegendDto } from './legends.dto';

@Controller('legends')
export class LegendsController {
  constructor(private readonly legendsService: LegendsService) {}

  @Post()
  async addLegend(
    @Res() res: Response,
    @Body() createLegendDto: CreateLegendDto
    ): Promise<Response> {
        try{
            const {
                name,
                mainText,
                paragraphs,
                images,
                isCompetitor,
                dateDan
            } = createLegendDto

            const createLegendResponse = 
            this.legendsService.incorporateLegend(createLegendDto)
      return res.status(HttpStatus.CREATED).json(createLegendResponse);
    } catch (error: any) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error al añadir la leyenda',
        error: error.message
      });
        }
  }
}
