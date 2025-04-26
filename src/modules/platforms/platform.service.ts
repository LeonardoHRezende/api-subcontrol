import { Injectable } from '@nestjs/common';
import { CreatePlatformUseCase } from './aplication/usecases/create-platform.usecase';
import { UpdatePlatformUseCase } from './aplication/usecases/update-platform.usecase';
import { FindByIdPlatformUseCase } from './aplication/usecases/findbyid.usecase';
import { DeletePlatformUseCase } from './aplication/usecases/delete-platform.usecase';
import {
  PlatformEntity,
  PlatformProps,
} from './domain/entities/platform.entity';
import { CreatePriceUseCase } from './aplication/usecases/create-prices.usecase';
import { FindHistoricalPriceByPlatformUseCase } from './aplication/usecases/findbyplatformid-prices.usecase';
import { UpdatePricesUseCase } from './aplication/usecases/update-prices.usecase';
import {
  HistoryPriceEntity,
  HistoryPriceProps,
} from './domain/entities/history_price.entity';
import { PlatformCategory } from './domain/enums/platform.enum';
import { ListByCategoryPlatformUseCase } from './aplication/usecases/listbycategory-platform.usecase';
import { ListByNamePlatformUseCase } from './aplication/usecases/listbyname-platform.usecase';
import { ListPlatformUseCase } from './aplication/usecases/list-platform.usecase';
@Injectable()
export class PlatformService {
  constructor(
    private readonly createPlatformUseCase: CreatePlatformUseCase,
    private readonly updatePlatformUseCase: UpdatePlatformUseCase,
    private readonly findByIdPlatformUseCase: FindByIdPlatformUseCase,
    private readonly deletePlatformUseCase: DeletePlatformUseCase,
    private readonly createHistoricalPriceUseCase: CreatePriceUseCase,
    private readonly getHistoricalPriceUseCase: FindHistoricalPriceByPlatformUseCase,
    private readonly updateHistoricalPriceUseCase: UpdatePricesUseCase,
    private readonly listPlatformUseCase: ListPlatformUseCase,
    private readonly listByNamePlatformUseCase: ListByNamePlatformUseCase,
    private readonly listByCategoryPlatformUseCase: ListByCategoryPlatformUseCase,
  ) {}

  async create(platformData: PlatformProps): Promise<void> {
    const platform = new PlatformEntity(platformData);
    return this.createPlatformUseCase.execute(platform);
  }

  async findById(platformId: string): Promise<PlatformEntity | null> {
    return this.findByIdPlatformUseCase.execute(platformId);
  }

  async update(platformData: PlatformProps): Promise<void> {
    const platform = new PlatformEntity(platformData);
    return this.updatePlatformUseCase.execute(platform);
  }

  async delete(platformId: string): Promise<void> {
    return this.deletePlatformUseCase.execute(platformId);
  }

  async createPrice(prices: HistoryPriceProps): Promise<void> {
    const historicalPrices = new HistoryPriceEntity(prices);

    return this.createHistoricalPriceUseCase.execute(historicalPrices);
  }

  async updatePrice(prices: HistoryPriceProps): Promise<void> {
    const historicalPrices = new HistoryPriceEntity(prices);

    return this.updateHistoricalPriceUseCase.execute(historicalPrices);
  }

  async findHistoricalPriceByPlatformId(
    platformId: string,
  ): Promise<HistoryPriceEntity[] | null> {
    const prices = await this.getHistoricalPriceUseCase.execute(platformId);
    return prices;
  }

  async listAll(): Promise<PlatformEntity[]> {
    return this.listPlatformUseCase.execute();
  }

  async searchByName(name: string): Promise<PlatformEntity[]> {
    return this.listByNamePlatformUseCase.execute(name);
  }

  async filterByCategory(
    category: PlatformCategory,
  ): Promise<PlatformEntity[]> {
    return this.listByCategoryPlatformUseCase.execute(category);
  }
}
