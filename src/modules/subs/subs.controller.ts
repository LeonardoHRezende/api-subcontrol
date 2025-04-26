import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Param,
  Body,
  Query,
  Patch,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { SubsService } from './subs.service';
import {
  SubscriptionDTO,
  UpdateSubscriptionDTO,
  CancelSubscriptionDTO,
} from './domain/entities/sub.entity';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('Assinaturas')
@Controller('subs')
export class SubsController {
  constructor(private readonly subsService: SubsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova assinatura' })
  @ApiResponse({
    status: 201,
    description: 'Assinatura criada com sucesso',
  })
  async create(@Body() body: SubscriptionDTO) {
    return this.subsService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar dados da assinatura' })
  @ApiParam({ name: 'id', description: 'ID da assinatura a ser atualizada' })
  @ApiResponse({
    status: 200,
    description: 'Assinatura atualizada com sucesso',
  })
  async update(@Param('id') id: string, @Body() body: UpdateSubscriptionDTO) {
    body.id = id;
    return this.subsService.update(body);
  }

  @Patch(':id/cancel')
  @ApiOperation({ summary: 'Cancelar assinatura' })
  @ApiParam({ name: 'id', description: 'ID da assinatura a ser cancelada' })
  @ApiResponse({
    status: 200,
    description: 'Assinatura cancelada com sucesso',
  })
  @HttpCode(HttpStatus.OK)
  async cancelSubscription(
    @Param('id') id: string,
    @Body() body: CancelSubscriptionDTO,
  ) {
    body.id = id;
    return this.subsService.cancelSubscription(body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir assinatura' })
  @ApiParam({ name: 'id', description: 'ID da assinatura a ser excluída' })
  async delete(@Param('id') id: string) {
    return this.subsService.delete(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar assinatura por ID' })
  @ApiParam({ name: 'id', description: 'ID da assinatura' })
  @ApiResponse({
    status: 200,
    description: 'Assinatura encontrada com sucesso',
    type: SubscriptionDTO,
  })
  async findUnique(@Param('id') id: string) {
    return this.subsService.findUnique(id);
  }

  @Get()
  @ApiOperation({ summary: 'Listar assinaturas por usuário' })
  @ApiQuery({
    name: 'userId',
    description: 'ID do usuário para filtrar assinaturas',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Assinaturas encontradas com sucesso',
    type: [SubscriptionDTO],
  })
  async list(@Query('userId') userId: string) {
    return this.subsService.list(userId);
  }
}
