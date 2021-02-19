import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuardGql } from 'src/auth/auth.guard-gql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';


/* O resolver no GraphQL é o equivalente ao Controller para o REST */
@Resolver('User')
export class UserResolver {


    constructor(
        private userService: UserService
    ) {}


    @UseGuards(AuthGuardGql)
    @Query(() => User)
    async user(@Args('id') id: string): Promise<User> {
        return await this.userService.findUserById(id);
    }

    @Query(() => User)
    async userByEmail(@Args('email') email: string): Promise<User> {
        return await this.userService.findUserByEmail(email);
    }

    @Query(() => [User])
    async users(): Promise<User[]> {
        return await this.userService.findAllUsers();
    }

    @Mutation(() => User)
    async createUser(@Args('data') data: CreateUserInput): Promise<User> {
        return await this.userService.createUser(data);
    }

    @Mutation(() => User)
    async updateUser(@Args('id') id: string, @Args('data') data: UpdateUserInput): Promise<User> {
        return await this.userService.updateUser(id, data);
    }

    @Mutation(() => Boolean)
    async deleteUser(@Args('id') id: string): Promise<boolean> {
        return await this.userService.deleteUser(id);
    }

}
