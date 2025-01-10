import { BookingI } from './interfaces/booking.interface';
import { HotelService } from 'src/hotel/hotel.service';
import { BookingIRepo } from './interfaces/booking.inte.repo';
import { BookingIService } from './interfaces/booking.inte.ser';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingService implements BookingIService {
    private bookingRepo;
    private hotelService;
    constructor(bookingRepo: BookingIRepo, hotelService: HotelService);
    findQuery(query: Object, providerId?: string): Promise<BookingI[]>;
    getOne(bookingId: string): Promise<BookingI>;
    create(bookingInfo: CreateBookingDto, hotelId: string, req: any): Promise<BookingI>;
}
