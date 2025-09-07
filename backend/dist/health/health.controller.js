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
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let HealthController = class HealthController {
    async getRootHealth() {
        return {
            status: 'ok',
            message: 'Dabang Dashboard API is running',
            timestamp: new Date().toISOString(),
            service: 'Dabang Dashboard API',
            version: '1.0.0',
            endpoints: {
                health: '/api/dashboard/health',
                metrics: '/api/dashboard/metrics',
                revenue: '/api/dashboard/revenue',
                customerSatisfaction: '/api/dashboard/customer-satisfaction',
                visitorInsights: '/api/dashboard/visitor-insights',
                topProducts: '/api/dashboard/top-products',
                documentation: '/api/docs'
            }
        };
    }
    async getHealth() {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            service: 'Dabang Dashboard API',
            version: '1.0.0'
        };
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Root health check endpoint' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Service is healthy' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "getRootHealth", null);
__decorate([
    (0, common_1.Get)('health'),
    (0, swagger_1.ApiOperation)({ summary: 'Health check endpoint' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Service is healthy' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthController.prototype, "getHealth", null);
exports.HealthController = HealthController = __decorate([
    (0, swagger_1.ApiTags)('health'),
    (0, common_1.Controller)()
], HealthController);
//# sourceMappingURL=health.controller.js.map