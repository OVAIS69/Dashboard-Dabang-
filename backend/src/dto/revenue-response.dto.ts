import { ApiProperty } from '@nestjs/swagger';

export class RevenueDataPoint {
  @ApiProperty({ description: 'Day of the week' })
  day: string;

  @ApiProperty({ description: 'Revenue value' })
  value: number;
}

export class RevenueResponseDto {
  @ApiProperty({ description: 'Online sales data', type: [RevenueDataPoint] })
  onlineSales: RevenueDataPoint[];

  @ApiProperty({ description: 'Offline sales data', type: [RevenueDataPoint] })
  offlineSales: RevenueDataPoint[];
}
