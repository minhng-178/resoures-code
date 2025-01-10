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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const hotel_service_1 = require("../hotel/hotel.service");
const formatQuery_1 = require("../shared/formatQuery");
let BookingService = class BookingService {
    constructor(bookingRepo, hotelService) {
        this.bookingRepo = bookingRepo;
        this.hotelService = hotelService;
    }
    async findQuery(query, providerId) {
        const formatQuery = (0, formatQuery_1.queryFormat)(query);
        return providerId ? this.bookingRepo.findQueryProvider(formatQuery, providerId) : this.bookingRepo.findQuery(formatQuery);
    }
    async getOne(bookingId) {
        const booking = await this.bookingRepo.getOne(bookingId);
        if (!booking) {
            throw new common_1.NotFoundException("Booking not exist");
        }
        return booking;
    }
    async create(bookingInfo, hotelId, req) {
        const hotel = await this.hotelService.getOne(hotelId);
        const paid = false;
        if (!hotel) {
            throw new common_1.NotFoundException('hotel id not found');
        }
        const bookingData = {
            ...bookingInfo,
            hotel: hotelId,
            user: req.user.sub,
            price: hotel.price * bookingInfo.rooms,
            alreadyPaid: paid ? true : false
        };
        return this.bookingRepo.create(bookingData);
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('BookingIRepo')),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => hotel_service_1.HotelService))),
    __metadata("design:paramtypes", [Object, hotel_service_1.HotelService])
], BookingService);
//# sourceMappingURL=booking.service.js.map