import { CreateHotelDto } from '../dto/create-hotel.dto';
import { HotelI, HotelIDetails } from '../interfaces/hotel.interface';
import { HotelIRepo } from '../interfaces/hotel.interface.repo';
import { HotelIService } from '../interfaces/hotel.interface.service';
import { Request } from 'src/shared/req.interface';
import { UpdateHotelDto } from '../dto/update-hotel.dto';
export declare class ProviderHotelController {
    private hotelRepo;
    private hotelService;
    constructor(hotelRepo: HotelIRepo, hotelService: HotelIService);
    getAll(query: string, req: Request): Promise<HotelI[]>;
    getOne(params: any): Promise<HotelIDetails>;
    create(req: Request, hotel: CreateHotelDto): Promise<HotelI | HotelIDetails>;
    update(params: any, hotel: UpdateHotelDto, req: Request): Promise<HotelI | HotelIDetails>;
    changeStatus(params: any, req: Request): Promise<HotelIDetails>;
}
