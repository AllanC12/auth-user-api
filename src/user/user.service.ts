import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService){}

    async createUser(data:CreateUserDTO ){
        return await this.prisma.users.create({
            data
        })
    }

    async readAllUsers(){
        return this.prisma.users.findMany()
    }

    async readOneUser(id: number){
       return await this.prisma.users.findUnique({
            where: {
                id
            }
       })
    }

    async updateUser(data: UpdateUserDTO, id: number){
        return this.prisma.users.update({
            data,
            where: {
                id
            }
        })
    }
}