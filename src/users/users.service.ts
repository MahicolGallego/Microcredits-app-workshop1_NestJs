import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async create(createUser: CreateUserDto): Promise<User>{
        try {
            const newUser = this.userRepository.create(createUser);
            return await this.userRepository.save(newUser);
        } catch (error) {
            throw error;
        }
    }
    async findAll(): Promise<User[]>{
        try {
            return await this.userRepository.find();
        } catch (error) {
            throw error;
        }
    }
    async findOne(id: number): Promise<User | null>{
        try {
            return await this.userRepository.findOne({where: {id}, relations: ['financialHistory', 'microcredits']});
        } catch (error) {
            throw error;
        }
    }
    async update(id: number, updateUser: UpdateUserDto): Promise<UpdateResult>{
        try {
            return await this.userRepository.update(id, updateUser);
        } catch (error) {
            throw error;
        }
    }

    async remove(id: number): Promise<DeleteResult>{
        try {
            return await this.userRepository.delete(id);      
        } catch (error) {
            throw error;
        }
    }
}
