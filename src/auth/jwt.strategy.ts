import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        private userService: UserService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        });
    }

    async validate(payload: {sub: User['id'], name: User['name']}) {
        const idUsuario = payload.sub;
        const user = this.userService.findUserById(idUsuario);
        if(!user)
            throw new UnauthorizedException(`Acesso não autorizado: Usuário não encontrado para o Id ${idUsuario}`);
        return user;
    }

}