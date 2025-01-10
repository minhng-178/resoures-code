import { Model } from "mongoose";
import { UserI, UserIPassword } from "./interfaces/user.interface";
import { UserIRepo } from "./interfaces/user.interface.repo";
export declare class UserRepository implements UserIRepo {
    private userModel;
    constructor(userModel: Model<UserI>);
    getAll(): Promise<UserI[]>;
    getId(id: string): Promise<UserI>;
    getOne(email: string): Promise<UserIPassword>;
    create(user: UserI): Promise<UserI>;
}
