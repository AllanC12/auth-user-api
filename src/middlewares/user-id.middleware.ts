import {BadRequestException, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';


export class UserMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){

        const id = req.params.id;

        if(isNaN(Number(id)) || Number(id) <= 0){
            throw new BadRequestException('ID is not valid')
        }

        console.log('middleware depois')
        next()

    }

}