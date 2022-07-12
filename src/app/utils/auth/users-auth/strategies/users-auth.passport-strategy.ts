import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersAuthService } from 'src/app/services/auth/users-auth/users-auth.service';

@Injectable()
export class UsersAuthPassportStrategy extends PassportStrategy(Strategy) {
  constructor(private UsersAuthService: UsersAuthService) {
    super({ usernameField: 'email' })
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.UsersAuthService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}