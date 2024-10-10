import { Module } from '@nestjs/common';
import { LegendsService } from '../Legends/legends.service';
import {LegendsController} from '../Legends/legends.controller'

@Module({
  imports: [],
  controllers: [LegendsController],
  providers: [LegendsService],
})
export class LegendsModule {}
