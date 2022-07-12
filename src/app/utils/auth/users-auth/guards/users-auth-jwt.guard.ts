
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class UsersAuthJwtGuard extends AuthGuard('jwt') {}
