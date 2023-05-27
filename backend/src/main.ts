import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');
  await app.listen(3000, () => {
    const config = app.get(ConfigService);
    const port = config.get('APP_PORT');
    logger.log(`application started in port ${port}`);
  });
}
bootstrap();
