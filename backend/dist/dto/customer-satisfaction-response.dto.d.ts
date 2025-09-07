export declare class SatisfactionDataPoint {
    week: string;
    value: number;
}
export declare class SatisfactionSummary {
    lastMonthTotal: number;
    thisMonthTotal: number;
}
export declare class CustomerSatisfactionResponseDto {
    lastMonth: SatisfactionDataPoint[];
    thisMonth: SatisfactionDataPoint[];
    summary: SatisfactionSummary;
}
