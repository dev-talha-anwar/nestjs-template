import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from 'src/controllers/users/users.controller';
import { User } from 'src/models/users/User.model';
import { UsersService } from 'src/services/users/users.service';

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
