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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRepository = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
let BookingRepository = class BookingRepository {
    constructor(bookingModel) {
        this.bookingModel = bookingModel;
    }
    async getOne(id) {
        return this.bookingModel.findById(id).lean();
    }
    async findParams(params) {
        return this.bookingModel.find(params).populate({
            path: 'hotel',
            select: 'name owner',
        }).lean();
    }
    async findQuery(query) {
        return this.bookingModel.find(query).populate({
            path: 'hotel',
            select: 'name owner',
        }).lean();
    }
    async findQueryProvider(query, providerId) {
        const bookings = await this.bookingModel.find(query).populate({
            path: 'hotel',
            match: { owner: providerId },
            select: 'name owner',
        }).lean();
        return bookings.filter((b) => b.hotel);
    }
    async create(booking) {
        return this.bookingModel.create(booking);
    }
};
exports.BookingRepository = BookingRepository;
exports.BookingRepository = BookingRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Booking')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BookingRepository);
//# sourceMappingURL=booking.repository.js.map