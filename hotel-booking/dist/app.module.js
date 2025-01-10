"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./user/user.module");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const hotel_module_1 = require("./hotel/hotel.module");
const booking_module_1 = require("./booking/booking.module");
const core_1 = require("@nestjs/core");
const cache_manager_1 = require("@nestjs/cache-manager");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cache_manager_1.CacheModule.register(),
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URL),
            core_1.RouterModule.register([
                {
                    path: '/hotel',
                    module: hotel_module_1.HotelModule,
                },
            ]),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            hotel_module_1.HotelModule,
            booking_module_1.BookingModule,
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: cache_manager_1.CacheInterceptor,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map