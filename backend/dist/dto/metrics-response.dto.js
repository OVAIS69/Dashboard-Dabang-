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
exports.MetricsResponseDto = exports.MetricValue = void 0;
const swagger_1 = require("@nestjs/swagger");
class MetricValue {
}
exports.MetricValue = MetricValue;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The metric value' }),
    __metadata("design:type", String)
], MetricValue.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The change from previous period' }),
    __metadata("design:type", String)
], MetricValue.prototype, "change", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The trend direction', enum: ['up', 'down', 'stable'] }),
    __metadata("design:type", String)
], MetricValue.prototype, "trend", void 0);
class MetricsResponseDto {
}
exports.MetricsResponseDto = MetricsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total sales metrics', type: MetricValue }),
    __metadata("design:type", MetricValue)
], MetricsResponseDto.prototype, "totalSales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total orders metrics', type: MetricValue }),
    __metadata("design:type", MetricValue)
], MetricsResponseDto.prototype, "totalOrders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Products sold metrics', type: MetricValue }),
    __metadata("design:type", MetricValue)
], MetricsResponseDto.prototype, "productsSold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New customers metrics', type: MetricValue }),
    __metadata("design:type", MetricValue)
], MetricsResponseDto.prototype, "newCustomers", void 0);
//# sourceMappingURL=metrics-response.dto.js.map