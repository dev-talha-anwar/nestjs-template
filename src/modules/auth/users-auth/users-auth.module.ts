import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersAuthController } from 'src/controllers/auth/users-auth/users-auth.controller';
import { User } from 'src/models/users/User.model';
import { UsersAuthService } from 'src/services/auth/users-auth/users-auth.service';
import { UsersService } from 'src/services/users/users.service';
import { UserAuthSessionSerializer } from 'src/utils/auth/users-auth/session-serializers/users-auth-session.serializer';
import { UsersAuthPassportStrategy } from 'src/utils/auth/users-auth/strategies/users-auth.passport-strategy';
import { UsersModule } from '../../users/users.module';

@Module({
    imports: [UsersModule,SequelizeModule.forFeature([User])],
    providers: [{provide:'User_Service',useClass: UsersService},UsersAuthService, UsersAuthPassportStrategy,UserAuthSessionSerializer],
    controllers: [UsersAuthController],
})
export class UsersAuthModule {}
