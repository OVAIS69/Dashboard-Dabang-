import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('health')
@Controller()
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Root health check endpoint' })
  @ApiResponse({ status: 200, description: 'Service is healthy' })
  async getRootHealth() {
    return {
      status: 'ok',
      message: 'Dabang Dashboard API is running',
      timestamp: new Date().toISOString(),
      service: 'Dabang Dashboard API',
      version: '1.0.0',
      endpoints: {
        health: '/api/dashboard/health',
        metrics: '/api/dashboard/metrics',
        revenue: '/api/dashboard/revenue',
        customerSatisfaction: '/api/dashboard/customer-satisfaction',
        visitorInsights: '/api/dashboard/visitor-insights',
        topProducts: '/api/dashboard/top-products',
        documentation: '/api/docs'
      }
    };
  }

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
}
