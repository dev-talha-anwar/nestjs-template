import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserAuthGuard } from 'src/app/utils/auth/users-auth/users-auth.guard';

@Controller('users/auth')
export class UsersAuthController {

  @UseGuards(UserAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

}
