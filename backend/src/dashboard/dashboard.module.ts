import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
// import { Metrics } from '../entities/metrics.entity';
// import { Revenue } from '../entities/revenue.entity';
// import { CustomerSatisfaction } from '../entities/customer-satisfaction.entity';
// import { VisitorInsights } from '../entities/visitor-insights.entity';
// import { TopProduct } from '../entities/top-product.entity';

@Module({
  imports: [
    // TypeOrmModule.forFeature([
    //   Metrics,
    //   Revenue,
    //   CustomerSatisfaction,
    //   VisitorInsights,
    //   TopProduct,
    // ]),
  ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
