import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

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
  async GetOneUser(@Param('id', ParseIntPipe) id) {
    return { user: {}, id };
  }

  @Patch(':id')
  async UpdateUser(@Body() body: UpdateUserDTO, @Param('id', ParseIntPipe) id) {
    return {
      method: 'Patch',
      body,
      id,
    };
  }

  @Delete(':id')
  async DeleteUSer(@Param('id', ParseIntPipe) id) {
    return { id };
  }
}
