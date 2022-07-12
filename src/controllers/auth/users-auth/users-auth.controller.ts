import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UsersAuthService } from 'src/app/services/auth/users-auth/users-auth.service';
import { UserAuthGuard } from 'src/app/utils/auth/users-auth/guards/users-auth.guard';

@Controller('users/auth')
export class UsersAuthController {

  constructor(private usersAuthService: UsersAuthService) {}

  @UseGuards(UserAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.usersAuthService.login(req.user);
  }

}
