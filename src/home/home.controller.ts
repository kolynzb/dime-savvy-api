import { Controller, Get, Render } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private service: HomeService) {}

  @Get('/')
  @Render('index')
  home() {
    return {
      viewData: this.service.AppInfo(),
    };
  }
}
