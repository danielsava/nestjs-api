import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateUserInput {

    @IsString()
    @IsNotEmpty({message: 'Informe o nome'})
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsNotEmpty({message: 'Informe o email'})
    @IsOptional()
    email?: string;

    @IsString()
    @IsNotEmpty({message: 'Informe a senha'})
    @IsOptional()
    password?: string;

}