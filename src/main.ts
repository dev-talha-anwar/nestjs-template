import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './modules/app/app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import {resolve } from 'path';
require('dotenv').config()

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.use(session({
    name: 'nestjs_session',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    }
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.useStaticAssets(join(resolve('./src/public')));
  app.setBaseViewsDir(join(resolve('./src/resources/views')));
  app.setViewEngine('hbs');
  await app.listen(process.env.APP_PORT);
}
bootstrap();
