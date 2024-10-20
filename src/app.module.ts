import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { BlogModule } from './Blog/blog.module';
import { LegendsModule } from './Legends/legends.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/taekion-db'),
    BlogModule, 
    LegendsModule],
})
export class AppModule {}
