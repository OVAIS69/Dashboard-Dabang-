import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';
import { MetricsResponseDto } from '../dto/metrics-response.dto';
import { RevenueResponseDto } from '../dto/revenue-response.dto';
import { CustomerSatisfactionResponseDto } from '../dto/customer-satisfaction-response.dto';
import { VisitorInsightsResponseDto } from '../dto/visitor-insights-response.dto';
import { TopProductsResponseDto } from '../dto/top-products-response.dto';

@ApiTags('dashboard')
@Controller('api/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('health')
  @ApiOperation({ summary: 'Health check endpoint' })
  @ApiResponse({ status: 200, description: 'Service is healthy' })
  async getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'Dabang Dashboard API',
      version: '1.0.0'
    };
  }

  @Get('metrics')
  @ApiOperation({ summary: 'Get today\'s sales metrics' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved metrics', type: MetricsResponseDto })
  async getMetrics(): Promise<MetricsResponseDto> {
    return this.dashboardService.getMetrics();
  }

  @Get('revenue')
  @ApiOperation({ summary: 'Get revenue data' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved revenue data', type: RevenueResponseDto })
  async getRevenue(): Promise<RevenueResponseDto> {
    return this.dashboardService.getRevenue();
  }

  @Get('customer-satisfaction')
  @ApiOperation({ summary: 'Get customer satisfaction data' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved customer satisfaction data', type: CustomerSatisfactionResponseDto })
  async getCustomerSatisfaction(): Promise<CustomerSatisfactionResponseDto> {
    return this.dashboardService.getCustomerSatisfaction();
  }

  @Get('visitor-insights')
  @ApiOperation({ summary: 'Get visitor insights data' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved visitor insights data', type: VisitorInsightsResponseDto })
  async getVisitorInsights(): Promise<VisitorInsightsResponseDto> {
    return this.dashboardService.getVisitorInsights();
  }

  @Get('top-products')
  @ApiOperation({ summary: 'Get top products data' })
  @ApiResponse({ status: 200, description: 'Successfully retrieved top products data', type: TopProductsResponseDto })
  async getTopProducts(): Promise<TopProductsResponseDto> {
    return this.dashboardService.getTopProducts();
  }
}
