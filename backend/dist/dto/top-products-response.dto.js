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
exports.TopProductsResponseDto = exports.ProductData = void 0;
const swagger_1 = require("@nestjs/swagger");
class ProductData {
}
exports.ProductData = ProductData;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID' }),
    __metadata("design:type", Number)
], ProductData.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product name' }),
    __metadata("design:type", String)
], ProductData.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Popularity percentage' }),
    __metadata("design:type", Number)
], ProductData.prototype, "popularity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sales percentage' }),
    __metadata("design:type", String)
], ProductData.prototype, "sales", void 0);
class TopProductsResponseDto {
}
exports.TopProductsResponseDto = TopProductsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of top products', type: [ProductData] }),
    __metadata("design:type", Array)
], TopProductsResponseDto.prototype, "products", void 0);
//# sourceMappingURL=top-products-response.dto.js.map