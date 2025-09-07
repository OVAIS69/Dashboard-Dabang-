import { MetricsResponseDto } from '../dto/metrics-response.dto';
import { RevenueResponseDto } from '../dto/revenue-response.dto';
import { CustomerSatisfactionResponseDto } from '../dto/customer-satisfaction-response.dto';
import { VisitorInsightsResponseDto } from '../dto/visitor-insights-response.dto';
import { TopProductsResponseDto } from '../dto/top-products-response.dto';
export declare class DashboardService {
    private readonly logger;
    constructor();
    getMetrics(): Promise<MetricsResponseDto>;
    getRevenue(): Promise<RevenueResponseDto>;
    getCustomerSatisfaction(): Promise<CustomerSatisfactionResponseDto>;
    getVisitorInsights(): Promise<VisitorInsightsResponseDto>;
    getTopProducts(): Promise<TopProductsResponseDto>;
}
