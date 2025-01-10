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
exports.HotelSchema = exports.Hotel = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../user/schema/user.schema");
let Hotel = class Hotel extends mongoose.Document {
};
exports.Hotel = Hotel;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], Hotel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 4, min: 0, max: 5 }),
    __metadata("design:type", Number)
], Hotel.prototype, "ratings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hotel.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hotel.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Hotel.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['draft', 'submitted', 'approved'], default: "draft" }),
    __metadata("design:type", String)
], Hotel.prototype, "submitStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Hotel.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], Hotel.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Hotel.prototype, "active", void 0);
exports.Hotel = Hotel = __decorate([
    (0, mongoose_1.Schema)()
], Hotel);
exports.HotelSchema = mongoose_1.SchemaFactory.createForClass(Hotel);
//# sourceMappingURL=hotel.schema.js.map