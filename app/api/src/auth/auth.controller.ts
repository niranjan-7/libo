import { Body, Controller, Post, HttpCode, HttpStatus, Get, UseGuards, Request } from "@nestjs/common";
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { Public } from './public-strategy';
import { User } from "src/user/user.entity";
import { AuthGuard } from "./auth.guard";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @Post('login')
    login(@Body() authPayload:Record<string, any>){
        return this.authService.signIn(authPayload.username,authPayload.password)
    }


    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("signup")
    signUp(@Body() signUpDto: User) {
        return this.authService.signUp(signUpDto);
    }

    @UseGuards(AuthGuard) 
    @Get('profile')
    getProfile(@Request() req) {
        return req.user; 
    }
}
