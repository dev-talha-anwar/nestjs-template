import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DatabaseModule } from '../database/database.module';
import { AppController } from 'src/controllers/app/app.controller';
import { AppService } from 'src/services/app/app.service';
import { UsersAuthModule } from '../auth/users-auth/users-auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    DatabaseModule.forRoot(),
    UsersModule,
    UsersAuthModule,
    PassportModule.register({session: true})
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    }
  ],
})
export class AppModule {}
