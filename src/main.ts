import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// https://www.youtube.com/watch?v=8_X0nSrzrCw 1:32
// Neon
// Prisma

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
