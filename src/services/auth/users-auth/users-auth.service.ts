import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { checkHash } from 'src/utils/auth/bcrypt';
import { UsersService } from '../../users/users.service';

@Injectable()
export class UsersAuthService {
  constructor(private usersService: UsersService,private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      if(checkHash(pass, user.password)){
        const { password, ...result } = user;
        return result;
      }else{
      }    
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
