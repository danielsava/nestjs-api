import { Field, HideField, ID, ObjectType } from "@nestjs/graphql";
import { hashPasswordTransform } from "src/common/utils/crypto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User {

    @Field(() => ID) 
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @HideField() // GraphQL nunca retornará este campo
    @Column({
        transformer: hashPasswordTransform
    })
    password: string;

}