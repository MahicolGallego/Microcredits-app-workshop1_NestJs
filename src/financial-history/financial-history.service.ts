import { Injectable } from '@nestjs/common';
import { FinancialHistory } from './entities/financial-history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateFinancialHistoryDto } from './dto/create-financial-history.dto';
import { UpdateFinancialHistoryDto } from './dto/update-financial-history.dto';
import { User } from 'src/users/entities/user.entity';
import { ResponseFinancialHistoryDto } from './dto/response-financial-history.dto';

@Injectable()
export class FinancialHistoryService {
  constructor(
    @InjectRepository(FinancialHistory)
    private readonly financialHistoryRepository: Repository<FinancialHistory>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(
    createFinancialHistory: CreateFinancialHistoryDto,
  ): Promise<FinancialHistory> {
    try {
      const user = await this.userRepository.findOne({
        where: { id: createFinancialHistory.user_id },
      });

      if (!user) {
        throw new Error('User not found');
      }

      const financialHistoryBuild = new FinancialHistory();

      financialHistoryBuild.description = createFinancialHistory.description;
      financialHistoryBuild.amount = createFinancialHistory.amount;
      financialHistoryBuild.date = new Date(createFinancialHistory.date);
      financialHistoryBuild.user = user;

      const newFinancialHistory = this.financialHistoryRepository.create(
        financialHistoryBuild,
      );

      return await this.financialHistoryRepository.save(newFinancialHistory);
    } catch (error) {
      throw error;
    }
  }
  async findAll(): Promise<ResponseFinancialHistoryDto[]> {
    try {
      const financialHistories = await this.financialHistoryRepository.find({
        relations: ['user'],
      });

      return financialHistories.map((fh) => ({
        id: fh.id,
        description: fh.description,
        amount: fh.amount,
        date: fh.date,
        user_id: fh.user_id,
        user: fh.user,
      }));
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number): Promise<ResponseFinancialHistoryDto | null> {
    try {
      const financialHistory = await this.financialHistoryRepository.findOne({
        where: { id },
        relations: ['user'],
      });
      return {
        id: financialHistory.id,
        description: financialHistory.description,
        amount: financialHistory.amount,
        date: financialHistory.date,
        user_id: financialHistory.user_id,
        user: financialHistory.user,
      };
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateFinancialHistory: UpdateFinancialHistoryDto,
  ): Promise<UpdateResult> {
    try {
      return await this.financialHistoryRepository.update(
        id,
        updateFinancialHistory,
      );
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    try {
      return await this.financialHistoryRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
