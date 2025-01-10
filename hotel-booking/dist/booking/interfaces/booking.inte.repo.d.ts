import { BookingI } from "./booking.interface";
export interface BookingIRepo {
    getOne(id: string): Promise<BookingI>;
    findParams(params: Object): Promise<BookingI[]>;
    findQuery(query: Object): Promise<BookingI[]>;
    findQueryProvider(query: Object, providerId: any): Promise<BookingI[]>;
    create(booking: any): Promise<BookingI>;
}
