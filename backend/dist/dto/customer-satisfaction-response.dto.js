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
exports.CustomerSatisfactionResponseDto = exports.SatisfactionSummary = exports.SatisfactionDataPoint = void 0;
const swagger_1 = require("@nestjs/swagger");
class SatisfactionDataPoint {
}
exports.SatisfactionDataPoint = SatisfactionDataPoint;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Week identifier' }),
    __metadata("design:type", String)
], SatisfactionDataPoint.prototype, "week", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Satisfaction value' }),
    __metadata("design:type", Number)
], SatisfactionDataPoint.prototype, "value", void 0);
class SatisfactionSummary {
}
exports.SatisfactionSummary = SatisfactionSummary;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last month total' }),
    __metadata("design:type", Number)
], SatisfactionSummary.prototype, "lastMonthTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'This month total' }),
    __metadata("design:type", Number)
], SatisfactionSummary.prototype, "thisMonthTotal", void 0);
class CustomerSatisfactionResponseDto {
}
exports.CustomerSatisfactionResponseDto = CustomerSatisfactionResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last month data', type: [SatisfactionDataPoint] }),
    __metadata("design:type", Array)
], CustomerSatisfactionResponseDto.prototype, "lastMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'This month data', type: [SatisfactionDataPoint] }),
    __metadata("design:type", Array)
], CustomerSatisfactionResponseDto.prototype, "thisMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Summary data', type: SatisfactionSummary }),
    __metadata("design:type", SatisfactionSummary)
], CustomerSatisfactionResponseDto.prototype, "summary", void 0);
//# sourceMappingURL=customer-satisfaction-response.dto.js.map