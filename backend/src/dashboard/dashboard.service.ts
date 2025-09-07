import { Injectable, Logger } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Metrics } from '../entities/metrics.entity';
// import { Revenue } from '../entities/revenue.entity';
// import { CustomerSatisfaction } from '../entities/customer-satisfaction.entity';
// import { VisitorInsights } from '../entities/visitor-insights.entity';
// import { TopProduct } from '../entities/top-product.entity';
import { MetricsResponseDto } from '../dto/metrics-response.dto';
import { RevenueResponseDto } from '../dto/revenue-response.dto';
import { CustomerSatisfactionResponseDto } from '../dto/customer-satisfaction-response.dto';
import { VisitorInsightsResponseDto } from '../dto/visitor-insights-response.dto';
import { TopProductsResponseDto } from '../dto/top-products-response.dto';

@Injectable()
export class DashboardService {
  private readonly logger = new Logger(DashboardService.name);

  constructor(
    // @InjectRepository(Metrics)
    // private metricsRepository: Repository<Metrics>,
    // @InjectRepository(Revenue)
    // private revenueRepository: Repository<Revenue>,
    // @InjectRepository(CustomerSatisfaction)
    // private customerSatisfactionRepository: Repository<CustomerSatisfaction>,
    // @InjectRepository(VisitorInsights)
    // private visitorInsightsRepository: Repository<VisitorInsights>,
    // @InjectRepository(TopProduct)
    // private topProductRepository: Repository<TopProduct>,
  ) {}

  async getMetrics(): Promise<MetricsResponseDto> {
    this.logger.log('Fetching metrics data');
    try {
      // For now, return mock data. In production, this would query the database
      const data = {
        totalSales: {
          value: '$1k',
          change: '+8% from yesterday',
          trend: 'up'
        },
        totalOrders: {
          value: '300',
          change: '+6% from yesterday',
          trend: 'up'
        },
        productsSold: {
          value: '5',
          change: '+1.2% from yesterday',
          trend: 'up'
        },
        newCustomers: {
          value: '8',
          change: '0.5% from yesterday',
          trend: 'up'
        }
      };
      this.logger.log('Metrics data fetched successfully');
      return data;
    } catch (error) {
      this.logger.error('Error fetching metrics data', error);
      throw error;
    }
  }

  async getRevenue(): Promise<RevenueResponseDto> {
    this.logger.log('Fetching revenue data');
    try {
      const data = {
        onlineSales: [
          { day: 'Mon', value: 12000 },
          { day: 'Tue', value: 15000 },
          { day: 'Wed', value: 18000 },
          { day: 'Thu', value: 20000 },
          { day: 'Fri', value: 22000 },
          { day: 'Sat', value: 25000 },
          { day: 'Sun', value: 28000 },
        ],
        offlineSales: [
          { day: 'Mon', value: 8000 },
          { day: 'Tue', value: 10000 },
          { day: 'Wed', value: 12000 },
          { day: 'Thu', value: 14000 },
          { day: 'Fri', value: 16000 },
          { day: 'Sat', value: 18000 },
          { day: 'Sun', value: 20000 },
        ]
      };
      this.logger.log('Revenue data fetched successfully');
      return data;
    } catch (error) {
      this.logger.error('Error fetching revenue data', error);
      throw error;
    }
  }

  async getCustomerSatisfaction(): Promise<CustomerSatisfactionResponseDto> {
    this.logger.log('Fetching customer satisfaction data');
    try {
      const data = {
        lastMonth: [
          { week: 'Week 1', value: 2800 },
          { week: 'Week 2', value: 2900 },
          { week: 'Week 3', value: 3000 },
          { week: 'Week 4', value: 3004 },
        ],
        thisMonth: [
          { week: 'Week 1', value: 3200 },
          { week: 'Week 2', value: 3800 },
          { week: 'Week 3', value: 4200 },
          { week: 'Week 4', value: 4504 },
        ],
        summary: {
          lastMonthTotal: 3004,
          thisMonthTotal: 4504
        }
      };
      this.logger.log('Customer satisfaction data fetched successfully');
      return data;
    } catch (error) {
      this.logger.error('Error fetching customer satisfaction data', error);
      throw error;
    }
  }

  async getVisitorInsights(): Promise<VisitorInsightsResponseDto> {
    this.logger.log('Fetching visitor insights data');
    try {
      const data = {
        loyalCustomers: [
          { month: 'Jan', value: 120 },
          { month: 'Feb', value: 150 },
          { month: 'Mar', value: 180 },
          { month: 'Apr', value: 200 },
          { month: 'May', value: 220 },
          { month: 'Jun', value: 250 },
          { month: 'Jul', value: 280 },
          { month: 'Aug', value: 300 },
          { month: 'Sep', value: 320 },
          { month: 'Oct', value: 350 },
          { month: 'Nov', value: 380 },
          { month: 'Dec', value: 400 },
        ],
        newCustomers: [
          { month: 'Jan', value: 80 },
          { month: 'Feb', value: 100 },
          { month: 'Mar', value: 120 },
          { month: 'Apr', value: 140 },
          { month: 'May', value: 160 },
          { month: 'Jun', value: 180 },
          { month: 'Jul', value: 200 },
          { month: 'Aug', value: 180 },
          { month: 'Sep', value: 160 },
          { month: 'Oct', value: 140 },
          { month: 'Nov', value: 120 },
          { month: 'Dec', value: 100 },
        ],
        uniqueCustomers: [
          { month: 'Jan', value: 60 },
          { month: 'Feb', value: 80 },
          { month: 'Mar', value: 100 },
          { month: 'Apr', value: 120 },
          { month: 'May', value: 140 },
          { month: 'Jun', value: 160 },
          { month: 'Jul', value: 180 },
          { month: 'Aug', value: 200 },
          { month: 'Sep', value: 220 },
          { month: 'Oct', value: 240 },
          { month: 'Nov', value: 260 },
          { month: 'Dec', value: 280 },
        ]
      };
      this.logger.log('Visitor insights data fetched successfully');
      return data;
    } catch (error) {
      this.logger.error('Error fetching visitor insights data', error);
      throw error;
    }
  }

  async getTopProducts(): Promise<TopProductsResponseDto> {
    this.logger.log('Fetching top products data');
    try {
      const data = {
        products: [
          {
            id: 1,
            name: 'Home Decor Range',
            popularity: 85,
            sales: '45%'
          },
          {
            id: 2,
            name: 'Disney Princess Pink Bag 18\'',
            popularity: 70,
            sales: '29%'
          },
          {
            id: 3,
            name: 'Bathroom Essentials',
            popularity: 60,
            sales: '18%'
          },
          {
            id: 4,
            name: 'Apple Smartwatches',
            popularity: 75,
            sales: '25%'
          }
        ]
      };
      this.logger.log('Top products data fetched successfully');
      return data;
    } catch (error) {
      this.logger.error('Error fetching top products data', error);
      throw error;
    }
  }
}
