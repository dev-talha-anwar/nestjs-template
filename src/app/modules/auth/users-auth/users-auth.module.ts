import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersAuthController } from 'src/app/controllers/auth/users-auth/users-auth.controller';
import { User } from 'src/app/models/users/User.model';
import { UsersAuthService } from 'src/app/services/auth/users-auth/users-auth.service';
import { UsersService } from 'src/app/services/users/users.service';
import { UserAuthSessionSerializer } from 'src/app/utils/auth/users-auth/users-auth-session.serializer';
import { UsersAuthPassportStrategy } from 'src/app/utils/auth/users-auth/users-auth.passport-strategy';
import { UsersModule } from '../../users/users.module';

@Module({
    imports: [UsersModule,SequelizeModule.forFeature([User])],
    providers: [{provide:'User_Service',useClass: UsersService},UsersAuthService, UsersAuthPassportStrategy,UserAuthSessionSerializer],
    controllers: [UsersAuthController],
})
export class UsersAuthModule {}
