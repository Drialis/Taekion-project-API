import { NestFactory } from '@nestjs/core';
import { LegendsModule } from '../src/Legends/legends.module';

async function bootstrap() {
  const app = await NestFactory.create([LegendsModule]);
  await app.listen(3000);
}
bootstrap();
