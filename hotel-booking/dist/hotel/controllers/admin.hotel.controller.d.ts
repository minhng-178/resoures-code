import { HotelIRepo } from '../interfaces/hotel.interface.repo';
import { HotelIService } from '../interfaces/hotel.interface.service';
import { HotelI, HotelIDetails } from '../interfaces/hotel.interface';
import { Request } from 'src/shared/req.interface';
import { UpdateHotelDto } from '../dto/update-hotel.dto';
export declare class AdminHotelController {
    private hotelRepo;
    private hotelService;
    constructor(hotelRepo: HotelIRepo, hotelService: HotelIService);
    getAll(query: string): Promise<HotelI[]>;
    getOne(params: any): Promise<HotelIDetails>;
    update(params: any, hotel: UpdateHotelDto): Promise<HotelI | HotelIDetails>;
    changeStatus(params: any, req: Request): Promise<HotelIDetails>;
}
