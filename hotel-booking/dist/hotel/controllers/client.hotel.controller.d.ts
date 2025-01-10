import { HotelIDetails, HotelI } from '../interfaces/hotel.interface';
import { HotelIRepo } from '../interfaces/hotel.interface.repo';
import { HotelIService } from '../interfaces/hotel.interface.service';
import { BookingI } from 'src/booking/interfaces/booking.interface';
import { BookingIService } from 'src/booking/interfaces/booking.inte.ser';
import { CreateBookingDto } from 'src/booking/dto/create-booking.dto';
export declare class HotelController {
    private hotelRepo;
    private hotelService;
    private bookingService;
    constructor(hotelRepo: HotelIRepo, hotelService: HotelIService, bookingService: BookingIService);
    getAll(query: any): Promise<HotelI[]>;
    getOne(params: any): Promise<HotelIDetails>;
    createBooking(booking: CreateBookingDto, params: any, req: any): Promise<BookingI>;
}
