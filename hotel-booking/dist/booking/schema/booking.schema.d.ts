import * as mongoose from 'mongoose';
import { User } from 'src/user/schema/user.schema';
import { Hotel } from 'src/hotel/schema/hotel.schema';
export declare class Booking {
    hotel: Hotel;
    user: User;
    rooms: number;
    price: number;
    createAt: Date;
    alreadyPaid: boolean;
}
export declare const BookingSchema: mongoose.Schema<Booking, mongoose.Model<Booking, any, any, any, mongoose.Document<unknown, any, Booking> & Booking & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Booking, mongoose.Document<unknown, {}, mongoose.FlatRecord<Booking>> & mongoose.FlatRecord<Booking> & {
    _id: mongoose.Types.ObjectId;
}>;
