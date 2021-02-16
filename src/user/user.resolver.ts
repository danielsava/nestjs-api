import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';


/* O resolver no GraphQL é o equivalente ao Controller para o REST */
@Resolver('User')
export class UserResolver {

    constructor(
        private userService: UserService
    ) {}


    @Query(() => User)
    async user(@Args('id') id: string): Promise<User> {
        return await this.userService.findUserById(id);
    }

    @Query(() => [User])
    async users(): Promise<User[]> {
        return await this.userService.findAllUsers();
    }

    @Mutation(() => User)
    async createUser(@Args('data') data: CreateUserInput): Promise<User> {
        return await this.userService.createUser(data);
    }

}
