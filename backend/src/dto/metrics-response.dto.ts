import { ApiProperty } from '@nestjs/swagger';

export class MetricValue {
  @ApiProperty({ description: 'The metric value' })
  value: string;

  @ApiProperty({ description: 'The change from previous period' })
  change: string;

  @ApiProperty({ description: 'The trend direction', enum: ['up', 'down', 'stable'] })
  trend: string;
}

export class MetricsResponseDto {
  @ApiProperty({ description: 'Total sales metrics', type: MetricValue })
  totalSales: MetricValue;

  @ApiProperty({ description: 'Total orders metrics', type: MetricValue })
  totalOrders: MetricValue;

  @ApiProperty({ description: 'Products sold metrics', type: MetricValue })
  productsSold: MetricValue;

  @ApiProperty({ description: 'New customers metrics', type: MetricValue })
  newCustomers: MetricValue;
}
