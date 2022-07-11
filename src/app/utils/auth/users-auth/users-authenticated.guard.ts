
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class UserAuthenticatedGuard implements CanActivate {
  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    return request.isAuthenticated();
  }
}

