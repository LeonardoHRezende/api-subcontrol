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

import { PlatformService } from './platform.service';
import { PlatformDTO } from './domain/entities/platform.entity';

@Controller('platform')
export class PlatformsController {
  constructor(private readonly platformService: PlatformService) {}

  @Post()
  async create(@Body() body: PlatformDTO) {
    return this.platformService.create(body);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: PlatformDTO,
  })
  async findById(@Param('id') id: string): Promise<PlatformDTO | null> {
    return this.platformService.findById(id);
  }

  @Put()
  async update(@Body() body: PlatformDTO) {
    return this.platformService.update(body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.platformService.delete(id);
  }
}
