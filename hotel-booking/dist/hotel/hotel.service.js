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
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const formatQuery_1 = require("../shared/formatQuery");
let HotelService = class HotelService {
    constructor(hotelRepo) {
        this.hotelRepo = hotelRepo;
    }
    async getQuery(query, providerId) {
        return providerId ?
            this.hotelRepo.findQuery((0, formatQuery_1.queryFormat)({ ...query, owner: providerId })) :
            this.hotelRepo.findQuery((0, formatQuery_1.queryFormat)(query));
    }
    async getApprovedHotels(query) {
        const filterQuerry = { ...query, submitStatus: "approved" };
        return this.hotelRepo.findQuery((0, formatQuery_1.queryFormat)(filterQuerry));
    }
    async getOne(hotelId) {
        const hotel = this.hotelRepo.getOne(hotelId);
        if (!hotel) {
            throw new common_1.NotFoundException('Hotel not exist');
        }
        return hotel;
    }
    async create(req, hotel) {
        const formatHotel = { ...hotel, owner: req.user.sub };
        return this.hotelRepo.create(formatHotel);
    }
    async providerUpdate(hotelId, newData, req) {
        const hotel = await this.hotelRepo.findParams({ _id: hotelId, owner: req.user.sub });
        if (!hotel) {
            throw new common_1.NotFoundException('Hotel not exist');
        }
        if (hotel.submitStatus !== 'draft') {
            throw new common_1.UnauthorizedException("You not allow to edit this");
        }
        const formatHotel = { ...newData, createdAt: new Date(Date.now()) };
        return this.hotelRepo.update(hotelId, formatHotel);
    }
    async adminUpdate(hotelId, newData) {
        const hotel = await this.hotelRepo.getOne(hotelId);
        if (!hotel) {
            throw new common_1.NotFoundException('Hotel not exist');
        }
        return this.hotelRepo.update(hotelId, newData);
    }
    async changeStatus(hotelId, accountType) {
        if (accountType === 'admin') {
            return this.hotelRepo.changeStatus(hotelId, "approved");
        }
        return this.hotelRepo.changeStatus(hotelId, "submitted");
    }
};
exports.HotelService = HotelService;
exports.HotelService = HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('HotelIRepo')),
    __metadata("design:paramtypes", [Object])
], HotelService);
//# sourceMappingURL=hotel.service.js.map