import { HistoryPriceEntity } from '../domain/entities/history_price.entity';
import { PlatformEntity } from '../domain/entities/platform.entity';

export interface IPlatformRepository {
  findById(id: string): Promise<PlatformEntity | null>;
  create(platform: PlatformEntity): Promise<void>;
  update(platform: PlatformEntity): Promise<void>;
  delete(id: string): Promise<void>;

  createHistoricalPrice(historicalPrice: HistoryPriceEntity): Promise<void>;
  findHistoricalPriceByPlatformId(
    platformId: string,
  ): Promise<HistoryPriceEntity[] | null>;
  updateHistoricalPrice(historicalPrice: HistoryPriceEntity): Promise<void>;
}

export class PlatformRepository implements IPlatformRepository {
  private platforms: PlatformEntity[] = [];
  private historicalPrices: HistoryPriceEntity[] = [];

  // eslint-disable-next-line @typescript-eslint/require-await
  async findById(id: string): Promise<PlatformEntity | null> {
    const platform = this.platforms.find((platform) => platform.Id === id);
    return platform ?? null;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async create(platform: PlatformEntity): Promise<void> {
    this.platforms.push(platform);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async update(platform: PlatformEntity): Promise<void> {
    const index = this.platforms.findIndex((p) => p.Id === platform.Id);
    if (index !== -1) {
      this.platforms[index] = platform;
    }
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async delete(id: string): Promise<void> {
    this.platforms = this.platforms.filter((platform) => platform.Id !== id);
    this.historicalPrices = this.historicalPrices.filter(
      (price) => price.PlatformId !== id,
    );
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async createHistoricalPrice(
    historicalPrice: HistoryPriceEntity,
  ): Promise<void> {
    this.historicalPrices.push(historicalPrice);
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async findHistoricalPriceByPlatformId(
    platformId: string,
  ): Promise<HistoryPriceEntity[] | null> {
    const prices = this.historicalPrices.filter(
      (price) => price.PlatformId === platformId,
    );
    return prices.length ? prices : null;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  async updateHistoricalPrice(
    historicalPrice: HistoryPriceEntity,
  ): Promise<void> {
    const index = this.historicalPrices.findIndex(
      (price) => price.Id === historicalPrice.Id,
    );
    if (index !== -1) {
      this.historicalPrices[index] = historicalPrice;
    }
  }
}
