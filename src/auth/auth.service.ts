import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { users } from '@prisma/client';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  async createToken(users: users) {
    return {
      access_token: this.jwtService.sign(
        {
          id: users.id,
          email: users.email,
          name: users.name,
        },
        {
          expiresIn: '7 days',
          subject: String(users.id),
          issuer: 'login',
          audience: 'user',
        },
      ),
    };
  }

  async checkToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        issuer: 'login',
        audience: 'user',
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async login(email: string, password: string) {
    const user = await this.prismaService.users.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials! password or email is incorrect',
      );
    }

    return await this.createToken(user);
  }

  async forget(email: string) {
    const user = await this.prismaService.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException(
        'Invalid credentials! email is incorrect',
      );
    }
    return await this.createToken(user);
  }

  async reset(password: string, token: string) {
    const id = 0;

    //TODO verify token

    const user = await this.prismaService.users.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });

    return await this.createToken(user);
  }

  async register(data: CreateUserDTO) {
    return this.userService.createUser(data);
  }
}
