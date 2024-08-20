import { PartialType } from '@nestjs/mapped-types';
import { CreateFinancialHistoryDto } from './create-financial-history.dto';

export class UpdateFinancialHistoryDto extends PartialType(
  CreateFinancialHistoryDto,
) {}
