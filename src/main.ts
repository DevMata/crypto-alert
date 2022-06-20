import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AlertsModule } from './alerts/alerts.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Crypto-Alerts')
    .setDescription('The cryptocurrency alerts API')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [AlertsModule],
  });
  SwaggerModule.setup('docs', app, document);

  await app.listen(configService.get<number>('PORT'));
}
bootstrap().catch(console.log);
