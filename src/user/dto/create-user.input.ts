import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserInput {

    @IsString()
    @IsNotEmpty({message: 'Informe o nome'})
    name: string;

    @IsEmail()
    @IsNotEmpty({message: 'Informe o email'})
    email: string;

}