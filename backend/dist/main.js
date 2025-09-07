"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const corsOriginEnv = process.env.CORS_ORIGIN;
    const allowedOrigins = corsOriginEnv
        ? corsOriginEnv.split(',').map((o) => o.trim()).filter((o) => o.length > 0)
        : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'];
    app.enableCors({
        origin: allowedOrigins.length > 0 ? allowedOrigins : '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Dabang Dashboard API')
        .setDescription('API documentation for Dabang Dashboard')
        .setVersion('1.0')
        .addTag('dashboard')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = process.env.PORT || 3002;
    await app.listen(port, '0.0.0.0');
    console.log(`🚀 Backend server running on http://localhost:${port}`);
    console.log(`📚 API documentation available at http://localhost:${port}/api/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map