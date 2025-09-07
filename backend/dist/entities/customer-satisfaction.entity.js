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
exports.CustomerSatisfaction = void 0;
const typeorm_1 = require("typeorm");
let CustomerSatisfaction = class CustomerSatisfaction {
};
exports.CustomerSatisfaction = CustomerSatisfaction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CustomerSatisfaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], CustomerSatisfaction.prototype, "period", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], CustomerSatisfaction.prototype, "week", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], CustomerSatisfaction.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CustomerSatisfaction.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CustomerSatisfaction.prototype, "updatedAt", void 0);
exports.CustomerSatisfaction = CustomerSatisfaction = __decorate([
    (0, typeorm_1.Entity)('customer_satisfaction')
], CustomerSatisfaction);
//# sourceMappingURL=customer-satisfaction.entity.js.map