import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardModule } from './dashboard/dashboard.module';
import { HealthController } from './health/health.controller';
import { DatabaseConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // Comment out TypeORM for now to run without database
    // TypeOrmModule.forRootAsync({
    //   useClass: DatabaseConfig,
    // }),
    DashboardModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
