import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {


    constructor(private userService: UserService) {}


    async validateUser(data: AuthInput): Promise<AuthType> {

        const user = await this.userService.findUserByEmail(data.email);
        if(!user)
            throw new NotFoundException(`Usuário não encontrado para o email ${data.email}`)

        const validPassword = compareSync(data.password, user.password);
        if(!validPassword)
            throw new UnauthorizedException('Senha incorreta');
            
        return {
            user, token: 'token'
        }

    }


}