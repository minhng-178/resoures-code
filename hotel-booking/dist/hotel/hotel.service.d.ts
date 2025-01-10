import { HotelIDetails, HotelI } from './interfaces/hotel.interface';
import { HotelIRepo } from './interfaces/hotel.interface.repo';
import { Request } from 'src/shared/req.interface';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { HotelIService } from './interfaces/hotel.interface.service';
export declare class HotelService implements HotelIService {
    private hotelRepo;
    constructor(hotelRepo: HotelIRepo);
    getQuery(query: Object, providerId?: string): Promise<HotelIDetails[]>;
    getApprovedHotels(query: Object): Promise<HotelIDetails[]>;
    getOne(hotelId: string): Promise<HotelIDetails>;
    create(req: Request, hotel: CreateHotelDto): Promise<HotelI | HotelIDetails>;
    providerUpdate(hotelId: string, newData: UpdateHotelDto, req: Request): Promise<HotelIDetails>;
    adminUpdate(hotelId: string, newData: UpdateHotelDto): Promise<HotelIDetails>;
    changeStatus(hotelId: string, accountType: string): Promise<HotelIDetails>;
}
