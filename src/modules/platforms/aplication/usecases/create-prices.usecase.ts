import { Injectable, Inject } from '@nestjs/common';
import { PlatformRepository } from '../../repositories/platform.respository';
import { HistoryPriceEntity } from '../../domain/entities/history_price.entity';

@Injectable()
export class CreatePriceUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly platformRepository: PlatformRepository,
  ) {}

  async execute(prices: HistoryPriceEntity): Promise<void> {
    return await this.platformRepository.createHistoricalPrice(prices);
  }
}
