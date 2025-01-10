import { Model } from "mongoose";
import { BookingI } from "./interfaces/booking.interface";
import { BookingIRepo } from "./interfaces/booking.inte.repo";
export declare class BookingRepository implements BookingIRepo {
    private bookingModel;
    constructor(bookingModel: Model<BookingI>);
    getOne(id: string): Promise<BookingI>;
    findParams(params: Object): Promise<BookingI[]>;
    findQuery(query: Object): Promise<BookingI[]>;
    findQueryProvider(query: Object, providerId: any): Promise<BookingI[]>;
    create(booking: BookingI): Promise<BookingI>;
}
