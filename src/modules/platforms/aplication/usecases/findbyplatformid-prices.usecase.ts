import { Injectable, Inject } from '@nestjs/common';
import { PlatformRepository } from '../../repositories/platform.respository';
import { HistoryPriceEntity } from '../../domain/entities/history_price.entity';

@Injectable()
export class FindHistoricalPriceByPlatformUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly platformRepository: PlatformRepository,
  ) {}

  async execute(platformId: string): Promise<HistoryPriceEntity[] | null> {
    return await this.platformRepository.findHistoricalPriceByPlatformId(
      platformId,
    );
  }
}
