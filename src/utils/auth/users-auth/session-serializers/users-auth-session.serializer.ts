import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/models/users/User.model";
import { UsersService } from "src/services/users/users.service";

export class UserAuthSessionSerializer extends PassportSerializer {
  constructor(@Inject('User_Service') private readonly usersService: UsersService) {
    super();
  }
  public serializeUser(user: User,done: (err,user:User) => void) {
      return done(null,user);
  }

  public async deserializeUser(user: User, done: (err: Error | null, user?: any) => void) {
      const check = await this.usersService.findOne(user.id);
      return check ? done(null,check) : done(null,false);
  }
}