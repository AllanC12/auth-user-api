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
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async Create(@Body() data: CreateUserDTO) {
    return this.userService.createUser(data);
  }

  @Get()
  async GetAllUsers() {
    return this.userService.readAllUsers();
  }

  @Get(':id')
  async GetOneUser(@Param('id', ParseIntPipe) id) {
     return this.userService.readOneUser(id);
  }

  @Patch(':id')
  async UpdateUser(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id) {
      return this.userService.updateUser(data, id);
  }

  @Delete(':id')
  async DeleteUSer(@Param('id', ParseIntPipe) id) {
    return { id };
  }
}
