import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';

import { PlatformService } from './platform.service';
import { PlatformDTO } from './domain/entities/platform.entity';
import { HistoryPriceDTO } from './domain/entities/history_price.entity';
import { PlatformCategory } from './domain/enums/platform.enum';

@ApiTags('Plataformas')
@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformService: PlatformService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova plataforma' })
  async create(@Body() body: PlatformDTO) {
    return this.platformService.create(body);
  }

  @Get('/unique/:id')
  @ApiOperation({ summary: 'Buscar plataforma por ID' })
  @ApiResponse({
    status: 200,
    description: 'Plataforma encontrada com sucesso',
    type: PlatformDTO,
  })
  async findById(@Param('id') id: string): Promise<PlatformDTO | null> {
    return this.platformService.findById(id);
  }

  @Get('search/name')
  @ApiOperation({ summary: 'Buscar plataformas por nome' })
  @ApiQuery({
    name: 'name',
    required: true,
    description: 'Nome da plataforma (busca parcial)',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de plataformas filtradas por nome',
    type: [PlatformDTO],
  })
  async searchByName(@Query('name') name: string): Promise<PlatformDTO[]> {
    return this.platformService.searchByName(name);
  }

  @Get('search/category')
  @ApiOperation({ summary: 'Filtrar plataformas por categoria' })
  @ApiQuery({
    name: 'category',
    required: true,
    description: 'Categoria da plataforma',
    enum: [
      'SOCIAL',
      'STREAMING',
      'GAMING',
      'PRODUCTIVITY',
      'MUSIC',
      'NEWS',
      'FITNESS',
      'EDUCATION',
      'TRAVEL',
      'FOOD',
      'SHOPPING',
      'SECURITY',
      'INVESTMENT',
      'ENTERTAINMENT',
      'HEALTH',
      'ADULT',
      'OTHER',
    ],
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de plataformas filtradas por categoria',
    type: [PlatformDTO],
  })
  async filterByCategory(
    @Query('category') category: PlatformCategory,
  ): Promise<PlatformDTO[]> {
    return this.platformService.filterByCategory(category);
  }

  @Get('list')
  @ApiOperation({ summary: 'Buscar todas as plataformas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todas as plataformas',
    type: [PlatformDTO],
  })
  async findAll(): Promise<PlatformDTO[]> {
    return this.platformService.listAll();
  }

  @Put()
  @ApiOperation({ summary: 'Atualizar plataforma' })
  async update(@Body() body: PlatformDTO) {
    return this.platformService.update(body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir plataforma' })
  async delete(@Param('id') id: string) {
    return this.platformService.delete(id);
  }

  @Post('/price')
  @ApiOperation({ summary: 'Registrar preço histórico' })
  async createPrices(@Body() body: HistoryPriceDTO) {
    return this.platformService.createPrice(body);
  }

  @Get('/price/:platformId')
  @ApiOperation({ summary: 'Obter histórico de preços por plataforma' })
  @ApiResponse({
    status: 200,
    description: 'Histórico de preços encontrado',
    type: [HistoryPriceDTO],
  })
  async findByPlatformId(
    @Param('platformId') id: string,
  ): Promise<HistoryPriceDTO[] | null> {
    return this.platformService.findHistoricalPriceByPlatformId(id);
  }

  @Put('/price')
  @ApiOperation({ summary: 'Atualizar preço histórico' })
  async updatePrices(@Body() body: HistoryPriceDTO) {
    return this.platformService.updatePrice(body);
  }
}
