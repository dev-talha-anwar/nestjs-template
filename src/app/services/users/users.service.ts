import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserEntity } from 'src/app/serializers/users/user.entity';
import { User } from 'src/app/models/User.model';
import { hashPassword } from 'src/app/utils/auth/bcrypt';


@Injectable()
export class UsersService {

  constructor( @InjectModel(User) private readonly user: typeof User ) {}

  async create(userData): Promise<UserEntity> {
    const findUser = await this.user.findOne({ where: { email: userData.email } });
    if (findUser) {
      throw new HttpException({ message: 'Cannot create user', status: HttpStatus.CONFLICT,}, HttpStatus.CONFLICT);
    }
    userData.password = hashPassword(userData.password);
    return await this.user.create(userData);
  }

  async findAll(): Promise<UserEntity[]> {
    return (await this.user.findAll()).map(user => new UserEntity(user));
  }

  async findOne(id:number) {
    const findUser = await this.user.findByPk(id);
    if(findUser){
      return new UserEntity(findUser);
    }
  }
  
  async findByEmail(email:string) {
    const findUser = await this.user.findOne({ where: { email: email } });
    if(findUser){
      return new UserEntity(findUser);
    }
  }

  update(user: User, updateUserDto) {
    return '';
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
