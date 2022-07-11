import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from '../services/users/users.service';

@Injectable()
export class DatabaseExistsPipe implements PipeTransform<any> {
    constructor(private userService: UsersService) { }
    async transform(value: any) {
      const isExists = await this.userService.findOne(value)
      if (!isExists) {
          throw new BadRequestException("Bad Request");
      }
      return isExists
    }
}