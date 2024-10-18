import { Module } from '@nestjs/common';
import { LegendsService } from './legends.service';
import { LegendsController } from './legends.controller'

@Module({
  imports: [],
  controllers: [LegendsController],
  providers: [LegendsService],
})
export class LegendsModule {}
