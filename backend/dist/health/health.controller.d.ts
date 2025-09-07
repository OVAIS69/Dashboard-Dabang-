export declare class HealthController {
    getRootHealth(): Promise<{
        status: string;
        message: string;
        timestamp: string;
        service: string;
        version: string;
        endpoints: {
            health: string;
            metrics: string;
            revenue: string;
            customerSatisfaction: string;
            visitorInsights: string;
            topProducts: string;
            documentation: string;
        };
    }>;
    getHealth(): Promise<{
        status: string;
        timestamp: string;
        service: string;
        version: string;
    }>;
}
