import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LegendsService } from './legends.service';
import { LegendsController } from './legends.controller'
import LegendsSchema from './legends.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Legend',
      schema: LegendsSchema
    }]),
  ],
    controllers: [LegendsController],
    providers: [LegendsService],
})

export class LegendsModule {}
