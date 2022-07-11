import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersAuthController } from 'src/app/controllers/auth/users-auth/users-auth.controller';
import { UsersAuthService } from 'src/app/services/auth/users-auth/users-auth.service';
import { UsersAuthPassportStrategy } from 'src/app/utils/auth/users-auth/users-auth.passport-strategy';
import { UsersModule } from '../../users/users.module';

@Module({
    imports: [UsersModule, PassportModule],
    providers: [UsersAuthService, UsersAuthPassportStrategy],
    controllers: [UsersAuthController],
})
export class UsersAuthModule {}
