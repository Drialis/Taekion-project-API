import { Injectable } from '@nestjs/common';
import { LegendsType } from './legends.types';

@Injectable()
export class LegendsService {
  getHello(): string {
    return 'Hello World!';
  }

  getAllLegends(): LegendsType {
    return this.getAllLegends
  }

  incorporateLegend(): LegendsType{
    return( )
  }
}
