import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from 'src/app/controllers/users/users.controller';
import { User } from 'src/app/models/users/User.model';
import { UsersService } from 'src/app/services/users/users.service';

@Module({
  imports:[
    SequelizeModule.forFeature([User])
    ],
  controllers: [UsersController],
  providers: [
    UsersService
  ],
  exports: [UsersService]
})
export class UsersModule {}
