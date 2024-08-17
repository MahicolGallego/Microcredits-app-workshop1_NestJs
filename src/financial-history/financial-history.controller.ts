import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { FinancialHistoryService } from './financial-history.service';
import { CreateFinancialHistoryDto } from './dto/create-financial-history.dto';
import { UpdateFinancialHistoryDto } from './dto/update-financial-history.dto';

@Controller('financial-histories')
export class FinancialHistoryController {
        constructor(private readonly financialHistoryServices: FinancialHistoryService){}

    @Post()
    @HttpCode(201) //Personaliza el code status para la respuesta
    async create(@Body() CreateFinancialHistory: CreateFinancialHistoryDto){
        try {
            return await this.financialHistoryServices.create(CreateFinancialHistory);
        } catch (error) {
            throw error;
        }
    }

    @Get()
    @HttpCode(200) 
    findAll(){
        try {
            return this.financialHistoryServices.findAll();
        } catch (error) {
            throw error;
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        try {
            return this.financialHistoryServices.findOne(id);
        } catch (error) {
            throw error;
        }
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateFinancialHistory: UpdateFinancialHistoryDto){
        try {
            return this.financialHistoryServices.update(id, updateFinancialHistory);
        } catch (error) {
            throw error;
        }
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id', ParseIntPipe) id:number){
        try {
            return this.financialHistoryServices.remove(id);
        } catch (error) {
            throw error;
        }
    }
}
