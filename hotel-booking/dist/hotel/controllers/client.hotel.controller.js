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
exports.HotelController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/guards/auth.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const booking_service_1 = require("../../booking/booking.service");
const create_booking_dto_1 = require("../../booking/dto/create-booking.dto");
let HotelController = class HotelController {
    constructor(hotelRepo, hotelService, bookingService) {
        this.hotelRepo = hotelRepo;
        this.hotelService = hotelService;
        this.bookingService = bookingService;
    }
    async getAll(query) {
        return this.hotelService.getApprovedHotels(query);
    }
    async getOne(params) {
        return this.hotelRepo.getOne(params.id);
    }
    async createBooking(booking, params, req) {
        return this.bookingService.create(booking, params.id, req);
    }
};
exports.HotelController = HotelController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "getOne", null);
__decorate([
    (0, roles_decorator_1.Roles)('client', 'admin'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(':id/booking'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_booking_dto_1.CreateBookingDto, Object, Object]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "createBooking", null);
exports.HotelController = HotelController = __decorate([
    (0, common_1.Controller)('client'),
    __param(0, (0, common_1.Inject)('HotelIRepo')),
    __param(1, (0, common_1.Inject)('HotelIService')),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => booking_service_1.BookingService))),
    __metadata("design:paramtypes", [Object, Object, Object])
], HotelController);
//# sourceMappingURL=client.hotel.controller.js.map