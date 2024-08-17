import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialHistory } from './entities/financial-history.entity';
import { FinancialHistoryService } from './financial-history.service';
import { FinancialHistoryController } from './financial-history.controller';

@Module({
    imports: [TypeOrmModule.forFeature([FinancialHistory])],
    providers: [FinancialHistoryService],
    controllers: [FinancialHistoryController]
})

export class FinancialHistoryModule {}
