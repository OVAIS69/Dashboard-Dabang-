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
exports.RevenueResponseDto = exports.RevenueDataPoint = void 0;
const swagger_1 = require("@nestjs/swagger");
class RevenueDataPoint {
}
exports.RevenueDataPoint = RevenueDataPoint;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Day of the week' }),
    __metadata("design:type", String)
], RevenueDataPoint.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Revenue value' }),
    __metadata("design:type", Number)
], RevenueDataPoint.prototype, "value", void 0);
class RevenueResponseDto {
}
exports.RevenueResponseDto = RevenueResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Online sales data', type: [RevenueDataPoint] }),
    __metadata("design:type", Array)
], RevenueResponseDto.prototype, "onlineSales", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Offline sales data', type: [RevenueDataPoint] }),
    __metadata("design:type", Array)
], RevenueResponseDto.prototype, "offlineSales", void 0);
//# sourceMappingURL=revenue-response.dto.js.map