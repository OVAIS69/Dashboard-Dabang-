import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  const corsOriginEnv = process.env.CORS_ORIGIN;
  const allowedOrigins = corsOriginEnv
    ? corsOriginEnv.split(',').map((o) => o.trim()).filter((o) => o.length > 0)
    : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'];

  app.enableCors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Dabang Dashboard API')
    .setDescription('API documentation for Dabang Dashboard')
    .setVersion('1.0')
    .addTag('dashboard')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3002;
  await app.listen(port as number, '0.0.0.0');
  
  console.log(`🚀 Backend server running on http://localhost:${port}`);
  console.log(`📚 API documentation available at http://localhost:${port}/api/docs`);
}

bootstrap();
