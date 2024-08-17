import { Injectable } from '@nestjs/common';
import { FinancialHistory } from './entities/financial-history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateFinancialHistoryDto } from './dto/create-financial-history.dto';
import { UpdateFinancialHistoryDto } from './dto/update-financial-history.dto';

@Injectable()
export class FinancialHistoryService {
    constructor(@InjectRepository(FinancialHistory) private readonly financialHistoryRepository: Repository<FinancialHistory>){}

    async create(createFinancialHistory: CreateFinancialHistoryDto): Promise<FinancialHistory>{
        try {
            const newFinancialHistory = this.financialHistoryRepository.create(createFinancialHistory);
            return await this.financialHistoryRepository.save(newFinancialHistory);      
        } catch (error) {
            throw error;
        }
    }
    async findAll(): Promise<FinancialHistory[]>{
        try {
            return await this.financialHistoryRepository.find();
        } catch (error) {
            throw error;
        }
    }

    async findOne(id: number): Promise<FinancialHistory | null>{
        try {
            return await this.financialHistoryRepository.findOne({where: {id}, relations: ['user']});
        } catch (error) {
            throw error;
        }
    }

    async update(id: number, updateFinancialHistory: UpdateFinancialHistoryDto): Promise<UpdateResult>{
        try {
            return await this.financialHistoryRepository.update(id, updateFinancialHistory);       
        } catch (error) {
            throw error;
        }
    }

    async remove(id: number): Promise<DeleteResult>{
        try {
            return await this.financialHistoryRepository.delete(id);   
        } catch (error) {
            throw error;
        }
    }
}
