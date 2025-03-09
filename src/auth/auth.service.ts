import {Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService{   
    constructor(private readonly jwtService: JwtService, private readonly prismaService: PrismaService){}

    async createToken(){
        // return this.jwtService.sign()
    }

    async checkToken(token: string){
        // return this.jwtService.verify(token)
    }

    async login(email: string, password: string){
        const user = await this.prismaService.users.findFirst({
            where: {
                email,
                password
            }
        })

        if(!user){
            throw new UnauthorizedException("Invalid credentials! password or email is incorrect")
        }

        return user;
    }

    async forget(email: string){
        const user = await this.prismaService.users.findFirst({
            where: {
                email,
            }
        })

        if(!user){
            throw new UnauthorizedException("Invalid credentials! email is incorrect")
        }

        return true;
    }

    async reset(password: string, token: string){
        const id = 0;

        //TODO verify token

        await this.prismaService.users.update({
            where: {
                id
            },
            data: {
                password
            }
        })

        return true
    }
}