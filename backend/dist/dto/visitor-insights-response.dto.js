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
exports.VisitorInsightsResponseDto = exports.VisitorDataPoint = void 0;
const swagger_1 = require("@nestjs/swagger");
class VisitorDataPoint {
}
exports.VisitorDataPoint = VisitorDataPoint;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Month identifier' }),
    __metadata("design:type", String)
], VisitorDataPoint.prototype, "month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Visitor count' }),
    __metadata("design:type", Number)
], VisitorDataPoint.prototype, "value", void 0);
class VisitorInsightsResponseDto {
}
exports.VisitorInsightsResponseDto = VisitorInsightsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Loyal customers data', type: [VisitorDataPoint] }),
    __metadata("design:type", Array)
], VisitorInsightsResponseDto.prototype, "loyalCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'New customers data', type: [VisitorDataPoint] }),
    __metadata("design:type", Array)
], VisitorInsightsResponseDto.prototype, "newCustomers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique customers data', type: [VisitorDataPoint] }),
    __metadata("design:type", Array)
], VisitorInsightsResponseDto.prototype, "uniqueCustomers", void 0);
//# sourceMappingURL=visitor-insights-response.dto.js.map