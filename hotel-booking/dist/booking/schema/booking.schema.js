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
exports.BookingSchema = exports.Booking = void 0;
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../../user/schema/user.schema");
const hotel_schema_1 = require("../../hotel/schema/hotel.schema");
let Booking = class Booking {
};
exports.Booking = Booking;
__decorate([
    (0, mongoose_1.Prop)({ required: [true, 'Which tour this booking belong?'], type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }),
    __metadata("design:type", hotel_schema_1.Hotel)
], Booking.prototype, "hotel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: [true, 'Which user booking this?'], type: mongoose.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], Booking.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], Booking.prototype, "rooms", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Booking.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], Booking.prototype, "createAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Booking.prototype, "alreadyPaid", void 0);
exports.Booking = Booking = __decorate([
    (0, mongoose_1.Schema)()
], Booking);
exports.BookingSchema = mongoose_1.SchemaFactory.createForClass(Booking);
exports.BookingSchema.pre(/^find/, function () {
    this.populate({
        path: 'user',
        select: 'email -_id',
    });
});
//# sourceMappingURL=booking.schema.js.map