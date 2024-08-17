import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userServices: UsersService){}

    @Post()
    @HttpCode(201) //Personaliza el code status para la respuesta
    async create(@Body() createUser: CreateUserDto){
        try {
            return await this.userServices.create(createUser);
        } catch (error) {
            throw error;
        }
    }

    @Get()
    @HttpCode(200) 
    findAll(){
        try {
            return this.userServices.findAll();
        } catch (error) {
            throw error;
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        try {
            return this.userServices.findOne(id);
        } catch (error) {
            throw error;
        }
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updateUser: UpdateUserDto){
        try {
            return this.userServices.update(id, updateUser);
        } catch (error) {
            throw error;
        }
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id', ParseIntPipe) id:number){
        try {
            return this.userServices.remove(id);
        } catch (error) {
            throw error;
        }
    }



}
