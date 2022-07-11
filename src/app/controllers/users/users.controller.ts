import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/app/dtos/users/create-user.dto';
import { UpdateUserDto } from 'src/app/dtos/users/update-user.dto';
import { User } from 'src/app/models/users/User.model';
import { DatabaseExistsPipe } from 'src/app/pipes/databaseExists.pipe';
import { UsersService } from 'src/app/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

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
