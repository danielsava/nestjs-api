import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class AuthInput {
    
    @IsString()
    @IsNotEmpty({message: 'Informe o email'})
    email: string;
    
    @IsString()
    @IsNotEmpty({message: 'Informe a senha'})
    password: string;
    
}