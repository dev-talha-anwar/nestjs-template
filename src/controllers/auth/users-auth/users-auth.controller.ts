import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserAuthGuard } from 'src/utils/auth/users-auth/guards/users-auth.guard';

@Controller('users/auth')
export class UsersAuthController {

  @UseGuards(UserAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

}
