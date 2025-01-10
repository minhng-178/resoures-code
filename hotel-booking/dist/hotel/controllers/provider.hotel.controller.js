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
exports.ProviderHotelController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/guards/auth.guard");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const create_hotel_dto_1 = require("../dto/create-hotel.dto");
const update_hotel_dto_1 = require("../dto/update-hotel.dto");
let ProviderHotelController = class ProviderHotelController {
    constructor(hotelRepo, hotelService) {
        this.hotelRepo = hotelRepo;
        this.hotelService = hotelService;
    }
    async getAll(query, req) {
        return this.hotelService.getQuery(query, req.user.sub);
    }
    async getOne(params) {
        return this.hotelRepo.getOne(params.id);
    }
    async create(req, hotel) {
        return this.hotelService.create(req, hotel);
    }
    async update(params, hotel, req) {
        return this.hotelService.providerUpdate(params.id, hotel, req);
    }
    async changeStatus(params, req) {
        return this.hotelService.changeStatus(params.id, req.user.sub);
    }
};
exports.ProviderHotelController = ProviderHotelController;
__decorate([
    (0, roles_decorator_1.Roles)('provider'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProviderHotelController.prototype, "getAll", null);
__decorate([
    (0, roles_decorator_1.Roles)('provider'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProviderHotelController.prototype, "getOne", null);
__decorate([
    (0, roles_decorator_1.Roles)('provider'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_hotel_dto_1.CreateHotelDto]),
    __metadata("design:returntype", Promise)
], ProviderHotelController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)('provider'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_hotel_dto_1.UpdateHotelDto, Object]),
    __metadata("design:returntype", Promise)
], ProviderHotelController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)('provider', 'admin'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProviderHotelController.prototype, "changeStatus", null);
exports.ProviderHotelController = ProviderHotelController = __decorate([
    (0, common_1.Controller)('provider'),
    __param(0, (0, common_1.Inject)('HotelIRepo')),
    __param(1, (0, common_1.Inject)('HotelIService')),
    __metadata("design:paramtypes", [Object, Object])
], ProviderHotelController);
//# sourceMappingURL=provider.hotel.controller.js.map