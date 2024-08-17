import { IsInt, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name:string;

    @IsInt()
    credit_score: number;
}