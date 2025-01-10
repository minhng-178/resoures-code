import { UserIRepo } from './interfaces/user.interface.repo';
import { UserIPassword } from './interfaces/user.interface';
export declare class UserService {
    private userRepo;
    constructor(userRepo: UserIRepo);
    getOne(email: string): Promise<UserIPassword>;
}
