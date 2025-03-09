import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [JwtModule.register({
        secret: `^s1Q(6lcV.Vt+:4L23yP7%FSh5@KzQO+`
    }),
    UserModule,
    PrismaModule
],
    controllers: [AuthController]
})
export class AuthModule{

}