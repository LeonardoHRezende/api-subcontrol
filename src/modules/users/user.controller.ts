import { Body, Controller, Post, Get, Param } from '@nestjs/common';
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
    console.log(id)
    return this.usersService.findById(id);
  }
}
