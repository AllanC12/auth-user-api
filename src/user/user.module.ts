import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {UserController} from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from './user.service';
import { UserMiddleware } from 'src/middlewares/user-id.middleware';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}