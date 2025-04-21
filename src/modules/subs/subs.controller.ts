import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { SubsService } from './subs.service';
import { SubscriptionDTO } from './domain/entities/sub.entity';
import { ApiResponse } from '@nestjs/swagger';

@Controller('subs')
export class SubsController {
  constructor(private readonly subsService: SubsService) {}

  @Post()
  async create(@Body() body: SubscriptionDTO) {
    return this.subsService.create(body);
  }

  @Put()
  async update(@Body() body: SubscriptionDTO) {
    return this.subsService.update(body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.subsService.delete(id);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Subscrição encontrada com sucesso',
    type: SubscriptionDTO,
  })
  async findUnique(@Param('id') id: string) {
    return this.subsService.findUnique(id);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Subscrições encontradas com sucesso',
    type: [SubscriptionDTO],
  })
  async list(@Query('userId') userId: string) {
    return this.subsService.list(userId);
  }
}
