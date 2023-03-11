import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  AppInfo() {
    return {
      appname: 'Dime Savvy',
      tagline: 'Finacial Literacy For All',
      author: 'kolynzb',
    };
  }
}
