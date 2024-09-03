import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private UserService: UserService,
        private jwtService:JwtService
    ) {}

    async signIn(username,password){
        const user = await this.UserService.findByEmailOrUsername(username);
        if (user?.password !== password) {
          throw new UnauthorizedException(
              `Unauthorized: User password (${user?.password}) does not match provided password (${password}).`
          );
      }
      
          const payload = { sub: user.userId, email: user.email };
          return {
            access_token: await this.jwtService.signAsync(payload),
          };
    }

    async signUp(payload: User) {
      const user = await this.UserService.create(payload);
      return user;
    }
}
