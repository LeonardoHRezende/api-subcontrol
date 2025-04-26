import { Injectable, Inject } from '@nestjs/common';
import { IPlatformRepository } from '../../repositories/platform.respository';
import { HistoryPriceEntity } from '../../domain/entities/history_price.entity';

@Injectable()
export class FindHistoricalPriceByPlatformUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly platformRepository: IPlatformRepository,
  ) {}

  async execute(platformId: string): Promise<HistoryPriceEntity[] | null> {
    return await this.platformRepository.findHistoricalPriceByPlatformId(
      platformId,
    );
  }
}
