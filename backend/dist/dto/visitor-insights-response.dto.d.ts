export declare class VisitorDataPoint {
    month: string;
    value: number;
}
export declare class VisitorInsightsResponseDto {
    loyalCustomers: VisitorDataPoint[];
    newCustomers: VisitorDataPoint[];
    uniqueCustomers: VisitorDataPoint[];
}
