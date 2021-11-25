import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * https://docs.nestjs.com/recipes/swagger
 */

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
  .setTitle('OpenAPI Documentation')
  .setDescription('The sample API description')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup("docs", app, document);
}

