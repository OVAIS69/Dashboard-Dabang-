import { ApiProperty } from '@nestjs/swagger';

export class SatisfactionDataPoint {
  @ApiProperty({ description: 'Week identifier' })
  week: string;

  @ApiProperty({ description: 'Satisfaction value' })
  value: number;
}

export class SatisfactionSummary {
  @ApiProperty({ description: 'Last month total' })
  lastMonthTotal: number;

  @ApiProperty({ description: 'This month total' })
  thisMonthTotal: number;
}

export class CustomerSatisfactionResponseDto {
  @ApiProperty({ description: 'Last month data', type: [SatisfactionDataPoint] })
  lastMonth: SatisfactionDataPoint[];

  @ApiProperty({ description: 'This month data', type: [SatisfactionDataPoint] })
  thisMonth: SatisfactionDataPoint[];

  @ApiProperty({ description: 'Summary data', type: SatisfactionSummary })
  summary: SatisfactionSummary;
}
