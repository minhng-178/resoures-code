import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { SigninDto } from './dto/sign-in.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(bodyData: SigninDto): Promise<{
        accessToken: string;
        accountType: string;
    }>;
}
