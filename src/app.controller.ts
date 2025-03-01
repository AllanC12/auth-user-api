import { Controller, Get , Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("userGet")
  getHello(): string {
    return this.appService.getHello();
  }
  @Post("userPost")
  setHello(): string {
    return "POST: Hello World POST!"
  }
}