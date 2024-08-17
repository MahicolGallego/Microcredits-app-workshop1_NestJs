import { IsDate, IsInt, IsPositive, IsString } from "class-validator";

export class CreateFinancialHistoryDto {
    @IsString()
    description: string;

    @IsInt()
    @IsPositive()
    amount: number;

    @IsDate()
    date: Date;
}