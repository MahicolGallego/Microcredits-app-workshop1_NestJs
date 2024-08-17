import { Type } from "class-transformer";
import { IsDate, IsInt, IsPositive, IsString } from "class-validator";

export class CreateFinancialHistoryDto {
    @IsString()
    description: string;

    @IsInt()
    @IsPositive()
    amount: number;

    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsInt()
    @IsPositive()
    user_id: number;
}