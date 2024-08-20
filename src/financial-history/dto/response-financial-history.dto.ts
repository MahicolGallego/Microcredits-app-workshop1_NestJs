import { Type } from 'class-transformer';
import { IsDate, IsInt, IsPositive, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class ResponseFinancialHistoryDto {
  @IsInt()
  @IsPositive()
  id: number;

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

  user: User;
}
