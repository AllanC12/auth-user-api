import { Controller, Post, Get,Body , Param} from '@nestjs/common'

@Controller('users')
export class UserController {
    @Post()
    async Create(@Body() body){
        return {body}
    }

    @Get()
    async GetAllUsers(){
        return {users : []}
    }

    @Get(':id')
    async GetOneUser(@Param() param){
        return  {user :{} , param}
    }
}