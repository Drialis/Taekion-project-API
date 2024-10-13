import { NestFactory } from '@nestjs/core';
import { LegendsModule } from '../src/Legends/legends.module';
import 'reflect-metadata';


async function bootstrap() {
  const app = await NestFactory.create([LegendsModule]);
  await app.listen(3000);
}
bootstrap();
