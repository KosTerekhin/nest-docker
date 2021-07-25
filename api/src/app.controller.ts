import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    console.log('debugging');
    return this.appService.getHello();
  }

  @Post()
  postData(data) {
    return this.appService.postData(data);
  }
}
