import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserService } from './user.service';
import { LogInterceptor } from 'src/interceptors/log.interceptor';
import { ParamId } from 'src/decorators/user-id.decorator';
@UseInterceptors(LogInterceptor)
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
  async GetOneUser(@ParamId() id) {
    console.log({ id });

    return this.userService.readOneUser(id);
  }

  @Patch(':id')
  async UpdateUser(@Body() data: UpdateUserDTO, @ParamId() id) {
    return this.userService.updateUser(data, id);
  }

  @Delete(':id')
  async DeleteUSer(@ParamId() id) {
    return this.userService.deleteUser(id);
  }
}
