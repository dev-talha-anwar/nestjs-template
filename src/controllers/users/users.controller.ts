import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/users/create-user.dto';
import { UpdateUserDto } from 'src/dtos/users/update-user.dto';
import { User } from 'src/models/users/User.model';
import { DatabaseExistsPipe } from 'src/pipes/databaseExists.pipe';
import { UsersService } from 'src/services/users/users.service';
import { UsersAuthJwtGuard } from 'src/utils/auth/users-auth/guards/users-auth-jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(UsersAuthJwtGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe,DatabaseExistsPipe) user: User) {
    return user
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe,DatabaseExistsPipe) user: User, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(user, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
