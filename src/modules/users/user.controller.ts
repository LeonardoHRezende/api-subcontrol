import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { UsersService } from './user.service';
import { CreateUserDto, GetUserDto } from './domain/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: GetUserDto,
  })
  async findById(@Param('id') id: string): Promise<GetUserDto> {
    return this.usersService.findById(id);
  }

  @Get('email/:email')
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: GetUserDto,
  })
  async findByEmail(@Param('email') email: string): Promise<GetUserDto> {
    return this.usersService.findByEmail(email);
  }

  @Put()
  async update(@Body() body: CreateUserDto) {
    return this.usersService.update(body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
