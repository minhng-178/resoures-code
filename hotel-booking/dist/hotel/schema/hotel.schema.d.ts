import * as mongoose from 'mongoose';
import { User } from 'src/user/schema/user.schema';
export declare class Hotel extends mongoose.Document {
    name: string;
    ratings: number;
    address: string;
    city: string;
    price: number;
    submitStatus: string;
    createdAt: Date;
    owner: User;
    active: Boolean;
}
export declare const HotelSchema: mongoose.Schema<Hotel, mongoose.Model<Hotel, any, any, any, mongoose.Document<unknown, any, Hotel> & Hotel & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Hotel, mongoose.Document<unknown, {}, mongoose.FlatRecord<Hotel>> & mongoose.FlatRecord<Hotel> & {
    _id: mongoose.Types.ObjectId;
}>;
