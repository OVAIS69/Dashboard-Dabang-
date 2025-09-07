import { ApiProperty } from '@nestjs/swagger';

export class VisitorDataPoint {
  @ApiProperty({ description: 'Month identifier' })
  month: string;

  @ApiProperty({ description: 'Visitor count' })
  value: number;
}

export class VisitorInsightsResponseDto {
  @ApiProperty({ description: 'Loyal customers data', type: [VisitorDataPoint] })
  loyalCustomers: VisitorDataPoint[];

  @ApiProperty({ description: 'New customers data', type: [VisitorDataPoint] })
  newCustomers: VisitorDataPoint[];

  @ApiProperty({ description: 'Unique customers data', type: [VisitorDataPoint] })
  uniqueCustomers: VisitorDataPoint[];
}
