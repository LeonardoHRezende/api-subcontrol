import { PrismaClient } from '@prisma/client';
import { prisma } from '../../../shared/prisma.client';

import { IPlatformRepository } from './platform.respository';
import { PlatformEntity } from '../domain/entities/platform.entity';
import { HistoryPriceEntity } from '../domain/entities/history_price.entity';
import { PlatformCategory } from '../domain/enums/platform.enum';

export class PlatformPrismaRepository implements IPlatformRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async findById(id: string): Promise<PlatformEntity | null> {
    const platform = await this.prisma.platforms.findUnique({
      where: { id },
    });

    if (!platform) return null;

    return new PlatformEntity({
      id: platform.id,
      name: platform.name,
      category: platform.category,
      websiteUrl: platform.websiteUrl,
      createdAt: platform.createdAt,
      updatedAt: platform.updatedAt,
      canceledAt: platform.canceledAt!,
    });
  }

  async searchByName(name: string): Promise<PlatformEntity[]> {
    const platforms = await this.prisma.platforms.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });

    return platforms.map(
      (platform) =>
        new PlatformEntity({
          id: platform.id,
          name: platform.name,
          category: platform.category as PlatformCategory,
          websiteUrl: platform.websiteUrl,
          createdAt: platform.createdAt,
          updatedAt: platform.updatedAt,
          canceledAt: platform.canceledAt!,
        }),
    );
  }

  async filterByCategory(
    category: PlatformCategory,
  ): Promise<PlatformEntity[]> {
    const platforms = await this.prisma.platforms.findMany({
      where: {
        category,
      },
    });

    return platforms.map(
      (platform) =>
        new PlatformEntity({
          id: platform.id,
          name: platform.name,
          category: platform.category as PlatformCategory,
          websiteUrl: platform.websiteUrl,
          createdAt: platform.createdAt,
          updatedAt: platform.updatedAt,
          canceledAt: platform.canceledAt!,
        }),
    );
  }

  async create(platform: PlatformEntity): Promise<void> {
    await this.prisma.platforms.create({
      data: {
        ...platform.toObject(),
      },
    });
  }

  async update(platform: PlatformEntity): Promise<void> {
    await this.prisma.platforms.update({
      where: { id: platform.Id },
      data: { ...platform.toObject() },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.platforms.delete({
      where: { id },
    });
  }

  async createHistoricalPrice(
    historicalPrice: HistoryPriceEntity,
  ): Promise<void> {
    await this.prisma.platforms_history_prices.create({
      data: { ...historicalPrice.toObject() },
    });
  }

  async updateHistoricalPrice(
    historicalPrice: HistoryPriceEntity,
  ): Promise<void> {
    await this.prisma.platforms_history_prices.update({
      where: { id: historicalPrice.id },
      data: { ...historicalPrice.toObject() },
    });
  }

  async findHistoricalPriceByPlatformId(
    platformId: string,
  ): Promise<HistoryPriceEntity[] | null> {
    const prices = await this.prisma.platforms_history_prices.findMany({
      where: { platformId },
      orderBy: { date: 'desc' },
    });

    return prices.map(
      (p) =>
        new HistoryPriceEntity({
          id: p.id,
          monthlyPrice: p?.monthlyPrice || 0,
          yearlyPrice: p?.yearlyPrice || 0,
          date: p.date,
          createdAt: p.createdAt,
          updatedAt: p.updatedAt,
          platformId: p.platformId,
        }),
    );
  }

  async listAll(): Promise<PlatformEntity[]> {
    const platforms = await this.prisma.platforms.findMany();
    return platforms.map(
      (p) =>
        new PlatformEntity({
          id: p.id,
          name: p.name,
          category: p.category as PlatformCategory,
          websiteUrl: p.websiteUrl,
          createdAt: p.createdAt,
          updatedAt: p.updatedAt,
          canceledAt: p.canceledAt!,
        }),
    );
  }
}
