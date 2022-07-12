import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from 'src/services/app/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('welcome.hbs')
  root() {
    return { message: 'Hellfsdfo world!' };
  }
}
