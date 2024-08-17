import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Microcredit } from './entities/microcredit.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateMicrocreditDto } from './dto/create-microcredit.dto';
import { UpdateMicrocreditDto } from './dto/update-microcredit.dto';

@Injectable()
export class MicrocreditService {
    constructor(@InjectRepository(Microcredit) private readonly microcreditRepository: Repository<Microcredit>){}

    async create(createMicrocredit: CreateMicrocreditDto): Promise<Microcredit> {
        try {
            return
        } catch (error) {
            throw error;
        }
    }

    async findAll(): Promise<Microcredit[]>{
        try {
            return
        } catch (error) {
            throw error;
        }
    }

    async findOne(id: number): Promise<Microcredit | null>{
        try {
            return
        } catch (error) {
            throw error;
        }
    }

    async update(id: number, updateMicrocredit: UpdateMicrocreditDto): Promise<UpdateResult>{
        try {
            return
        } catch (error) {
            throw error;
        }
    }

    async remove(id:number): Promise<DeleteResult>{
        try {
            return
        } catch (error) {
            throw error;
        }
    }
}
