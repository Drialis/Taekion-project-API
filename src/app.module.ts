import { Module } from '@nestjs/common';
import { BlogModule } from './Blog/blog.module';
import { LegendsModule } from './Legends/legends.module';

@Module({
  imports: [BlogModule, LegendsModule],
})
export class AppModule {}
