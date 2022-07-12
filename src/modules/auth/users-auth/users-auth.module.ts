import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersAuthController } from 'src/controllers/auth/users-auth/users-auth.controller';
import { UsersAuthService } from 'src/services/auth/users-auth/users-auth.service';
import { UsersAuthJwtStrategy } from 'src/utils/auth/users-auth/strategies/users-auth-jwt.strategy';
import { UsersAuthPassportStrategy } from 'src/utils/auth/users-auth/strategies/users-auth.passport-strategy';
import { UsersModule } from '../../users/users.module';

@Module({
    imports: [
        UsersModule, 
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '60s' },
        })
    ],
    providers: [UsersAuthService, UsersAuthPassportStrategy,UsersAuthJwtStrategy],
    controllers: [UsersAuthController],
})
export class UsersAuthModule {}