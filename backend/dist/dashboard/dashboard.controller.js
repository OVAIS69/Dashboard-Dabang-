"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dashboard_service_1 = require("./dashboard.service");
const metrics_response_dto_1 = require("../dto/metrics-response.dto");
const revenue_response_dto_1 = require("../dto/revenue-response.dto");
const customer_satisfaction_response_dto_1 = require("../dto/customer-satisfaction-response.dto");
const visitor_insights_response_dto_1 = require("../dto/visitor-insights-response.dto");
const top_products_response_dto_1 = require("../dto/top-products-response.dto");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    async getHealth() {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            service: 'Dabang Dashboard API',
            version: '1.0.0'
        };
    }
    async getMetrics() {
        return this.dashboardService.getMetrics();
    }
    async getRevenue() {
        return this.dashboardService.getRevenue();
    }
    async getCustomerSatisfaction() {
        return this.dashboardService.getCustomerSatisfaction();
    }
    async getVisitorInsights() {
        return this.dashboardService.getVisitorInsights();
    }
    async getTopProducts() {
        return this.dashboardService.getTopProducts();
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)('health'),
    (0, swagger_1.ApiOperation)({ summary: 'Health check endpoint' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Service is healthy' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getHealth", null);
__decorate([
    (0, common_1.Get)('metrics'),
    (0, swagger_1.ApiOperation)({ summary: 'Get today\'s sales metrics' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully retrieved metrics', type: metrics_response_dto_1.MetricsResponseDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getMetrics", null);
__decorate([
    (0, common_1.Get)('revenue'),
    (0, swagger_1.ApiOperation)({ summary: 'Get revenue data' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully retrieved revenue data', type: revenue_response_dto_1.RevenueResponseDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getRevenue", null);
__decorate([
    (0, common_1.Get)('customer-satisfaction'),
    (0, swagger_1.ApiOperation)({ summary: 'Get customer satisfaction data' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully retrieved customer satisfaction data', type: customer_satisfaction_response_dto_1.CustomerSatisfactionResponseDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getCustomerSatisfaction", null);
__decorate([
    (0, common_1.Get)('visitor-insights'),
    (0, swagger_1.ApiOperation)({ summary: 'Get visitor insights data' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully retrieved visitor insights data', type: visitor_insights_response_dto_1.VisitorInsightsResponseDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getVisitorInsights", null);
__decorate([
    (0, common_1.Get)('top-products'),
    (0, swagger_1.ApiOperation)({ summary: 'Get top products data' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successfully retrieved top products data', type: top_products_response_dto_1.TopProductsResponseDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getTopProducts", null);
exports.DashboardController = DashboardController = __decorate([
    (0, swagger_1.ApiTags)('dashboard'),
    (0, common_1.Controller)('api/dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map