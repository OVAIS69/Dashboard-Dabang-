export declare class MetricValue {
    value: string;
    change: string;
    trend: string;
}
export declare class MetricsResponseDto {
    totalSales: MetricValue;
    totalOrders: MetricValue;
    productsSold: MetricValue;
    newCustomers: MetricValue;
}
