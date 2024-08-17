import { IsInt, IsPositive, IsString } from "class-validator";

export class CreateMicrocreditDto {
    @IsInt()
    @IsPositive()
    amount:number;

    @IsInt()
    @IsPositive()
    interest_rate: number;

    @IsString()
    status: string;
}