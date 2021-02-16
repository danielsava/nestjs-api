import { Args, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';


/* O resolver no GraphQL é o equivalente ao Controller para o REST */
@Resolver('User')
export class UserResolver {

    constructor(
        private userService: UserService
    ) {}

    async createUser(@Args('data') data: CreateUserInput): Promise<User> {
        const user = await this.userService.createUser(data);
        return user;
    }

}
