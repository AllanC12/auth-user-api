import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async Create(@Body() body: CreateUserDTO) {
    return { body };
  }

  @Get()
  async GetAllUsers() {
    return { users: [] };
  }

  @Get(':id')
  async GetOneUser(@Param() param) {
    return { user: {}, param };
  }

  @Patch(':id')
  async UpdateUser(@Body() body, @Param() params) {
    return {
      method: 'Patch',
      body,
      params,
    };
  }

  @Delete(':id')
  async DeleteUSer(@Param() params) {
    return { params };
  }
}
