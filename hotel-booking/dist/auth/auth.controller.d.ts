import { SigninDto } from './dto/sign-in.dto';
import { AuthService } from './auth.service';
import { Request } from 'src/shared/req.interface';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(body: SigninDto): Promise<{
        accessToken: string;
        accountType: string;
    }>;
    getProfile(req: Request): {
        sub: string;
        accountType: string;
    };
}
