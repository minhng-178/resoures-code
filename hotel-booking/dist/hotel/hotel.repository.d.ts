import { Model } from "mongoose";
import { HotelI, HotelIDetails } from "./interfaces/hotel.interface";
import { HotelIRepo } from "./interfaces/hotel.interface.repo";
export declare class HotelRepository implements HotelIRepo {
    private hotelModel;
    constructor(hotelModel: Model<HotelI>);
    getOne(id: string): Promise<HotelIDetails>;
    findQuery(query: Object): Promise<HotelIDetails[]>;
    findParams(params: Object): Promise<HotelIDetails>;
    create(hotel: HotelIDetails): Promise<HotelI | HotelIDetails>;
    update(hotelId: string, newData: HotelI): Promise<HotelIDetails>;
    changeStatus(hotelId: string, statusData: string): Promise<HotelIDetails>;
}
