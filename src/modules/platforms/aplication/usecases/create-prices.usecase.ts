import { Injectable, Inject } from '@nestjs/common';
import { IPlatformRepository } from '../../repositories/platform.respository';
import { HistoryPriceEntity } from '../../domain/entities/history_price.entity';

@Injectable()
export class CreatePriceUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly platformRepository: IPlatformRepository,
  ) {}

  async execute(prices: HistoryPriceEntity): Promise<void> {
    return await this.platformRepository.createHistoricalPrice(prices);
  }
}
