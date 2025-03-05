import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService){}

    async createUser(data:CreateUserDTO ){
        return await this.prisma.users.create({
            data
        })
    }
}