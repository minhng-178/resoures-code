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
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/guards/auth.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const roles_guard_1 = require("../auth/guards/roles.guard");
let BookingController = class BookingController {
    constructor(bookingService, bookingRepo) {
        this.bookingService = bookingService;
        this.bookingRepo = bookingRepo;
    }
    async getAll(query) {
        return this.bookingService.findQuery(query);
    }
    async getMyBooking(req) {
        return this.bookingRepo.findParams({ user: req.user.sub });
    }
    async getMyHotelBookings(query, req) {
        return this.bookingService.findQuery(query, req.user.sub);
    }
};
exports.BookingController = BookingController;
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('client'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getMyBooking", null);
__decorate([
    (0, roles_decorator_1.Roles)('provider'),
    (0, common_1.Get)('provider'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getMyHotelBookings", null);
exports.BookingController = BookingController = __decorate([
    (0, common_1.Controller)('booking'),
    __param(0, (0, common_1.Inject)('BookingIService')),
    __param(1, (0, common_1.Inject)('BookingIRepo')),
    __metadata("design:paramtypes", [Object, Object])
], BookingController);
//# sourceMappingURL=booking.controller.js.map