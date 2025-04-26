import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Patch,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsersService } from './user.service';
import {
  CreateUserDto,
  GetUserDto,
  TermsAcceptanceDto,
} from './domain/entities/user.entity';

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
  })
  async create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuário por ID' })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: GetUserDto,
  })
  async findById(@Param('id') id: string): Promise<GetUserDto> {
    return this.usersService.findById(id);
  }

  @Get('email/:email')
  @ApiOperation({ summary: 'Buscar usuário por email' })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: GetUserDto,
  })
  async findByEmail(@Param('email') email: string): Promise<GetUserDto> {
    return this.usersService.findByEmail(email);
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar dados do usuário' })
  async update(@Body() body: CreateUserDto) {
    return this.usersService.update(body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir usuário' })
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Patch('terms')
  @ApiOperation({ summary: 'Aceitar termos de uso' })
  @ApiResponse({
    status: 200,
    description: 'Termos aceitos com sucesso',
  })
  @HttpCode(HttpStatus.OK)
  async acceptTerms(@Body() body: TermsAcceptanceDto) {
    return this.usersService.acceptTerms(body);
  }
}
