import { UserI } from './interfaces/user.interface';
import { UserIRepo } from './interfaces/user.interface.repo';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserIRepo);
    getAll(): Promise<UserI[]>;
    getId(params: any): Promise<UserI>;
    create(user: CreateUserDto): Promise<UserI>;
}
