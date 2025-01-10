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
exports.HotelRepository = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
let HotelRepository = class HotelRepository {
    constructor(hotelModel) {
        this.hotelModel = hotelModel;
    }
    async getOne(id) {
        return this.hotelModel.findById(id).lean();
    }
    async findQuery(query) {
        return this.hotelModel.find(query).lean();
    }
    async findParams(params) {
        return this.hotelModel.findOne(params).lean();
    }
    async create(hotel) {
        return this.hotelModel.create(hotel);
    }
    async update(hotelId, newData) {
        return this.hotelModel.findByIdAndUpdate(hotelId, newData, {
            new: true,
            runValidators: true
        });
    }
    async changeStatus(hotelId, statusData) {
        return this.hotelModel.findByIdAndUpdate(hotelId, { submitStatus: statusData }, { new: true });
    }
};
exports.HotelRepository = HotelRepository;
exports.HotelRepository = HotelRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Hotel')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], HotelRepository);
//# sourceMappingURL=hotel.repository.js.map