import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { LegendsService } from '../Legends/legends.service';
import { LegendsType } from './legends.types';

@Controller('blog')
export class LegendsController {
  constructor(private readonly blogService: LegendsService) {}

  @Get()
  getAllLegends() {
    return this.blogService.getAllLegends();
  }

  @Post()
  incorporateLegend(
    @Res() res:Response,
    @Body() body: LegendsType): Promise<Response> {
    try{
        const{
            name,
        } = body
    } catch (error) {
        console.log('no estás metiendo bien los datos')
        return res.status(500).send('controller error')
    }
  }
}

