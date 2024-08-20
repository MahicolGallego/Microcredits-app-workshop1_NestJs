import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { FinancialHistoryService } from './financial-history.service';
import { CreateFinancialHistoryDto } from './dto/create-financial-history.dto';
import { UpdateFinancialHistoryDto } from './dto/update-financial-history.dto';
import { ResponseFinancialHistoryDto } from './dto/response-financial-history.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FinancialHistory } from './entities/financial-history.entity';

@Controller('financial-histories')
export class FinancialHistoryController {
  constructor(
    private readonly financialHistoryServices: FinancialHistoryService,
  ) {}

  @Post()
  @HttpCode(201) //Personaliza el code status para la respuesta
  async create(
    @Body() CreateFinancialHistory: CreateFinancialHistoryDto,
  ): Promise<FinancialHistory> {
    try {
      return await this.financialHistoryServices.create(CreateFinancialHistory);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  @HttpCode(200)
  findAll(): Promise<ResponseFinancialHistoryDto[]> {
    try {
      return this.financialHistoryServices.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseFinancialHistoryDto> {
    try {
      return this.financialHistoryServices.findOne(id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFinancialHistory: UpdateFinancialHistoryDto,
  ): Promise<UpdateResult> {
    try {
      return this.financialHistoryServices.update(id, updateFinancialHistory);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    try {
      return this.financialHistoryServices.remove(id);
    } catch (error) {
      throw error;
    }
  }
}
