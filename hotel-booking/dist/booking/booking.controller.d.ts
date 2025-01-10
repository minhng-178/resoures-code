import { BookingI } from './interfaces/booking.interface';
import { Request } from 'src/shared/req.interface';
import { BookingIService } from './interfaces/booking.inte.ser';
import { BookingIRepo } from './interfaces/booking.inte.repo';
export declare class BookingController {
    private bookingService;
    private bookingRepo;
    constructor(bookingService: BookingIService, bookingRepo: BookingIRepo);
    getAll(query: string): Promise<BookingI[]>;
    getMyBooking(req: Request): Promise<BookingI[]>;
    getMyHotelBookings(query: string, req: Request): Promise<BookingI[]>;
}
