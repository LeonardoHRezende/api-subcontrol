import { SubscriptionEntity } from '../domain/entities/sub.entity';
import { ISubRepository } from './sub.repository';
import { prisma } from '../../../shared/prisma.client';
import { PrismaClient } from '@prisma/client';

export class SubPrismaRepository implements ISubRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async findById(id: string): Promise<SubscriptionEntity | null> {
    const subscription = await this.prisma.subscriptions.findUnique({
      where: { id },
    });

    if (!subscription) return null;

    return new SubscriptionEntity({
      id: subscription.id,
      plan: subscription.plan,
      customPrice: subscription.customPrice ?? undefined,
      recurrence: subscription.recurrence,
      status: subscription.status,
      startDate: subscription.startDate,
      canceledAt: subscription?.canceledAt ?? undefined,
      createdAt: subscription.createdAt,
      updatedAt: subscription.updatedAt,
      accountId: subscription.accountId,
      platformsId: subscription.platformsId ?? undefined,
    });
  }

  async create(subscription: SubscriptionEntity): Promise<void> {
    await this.prisma.subscriptions.create({
      data: subscription.toObject(),
    });
  }

  async update(subscription: SubscriptionEntity): Promise<void> {
    await this.prisma.subscriptions.update({
      where: { id: subscription.id },
      data: subscription.toObject(),
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.subscriptions.delete({
      where: { id },
    });
  }

  async listByUserId(userId: string): Promise<SubscriptionEntity[] | null> {
    const subscriptions = await this.prisma.subscriptions.findMany({
      where: { accountId: userId },
    });

    return subscriptions.map(
      (subscription) =>
        new SubscriptionEntity({
          id: subscription.id,
          plan: subscription.plan,
          customPrice: subscription.customPrice ?? undefined,
          recurrence: subscription.recurrence,
          status: subscription.status,
          startDate: subscription.startDate,
          canceledAt: subscription.canceledAt ?? undefined,
          createdAt: subscription.createdAt,
          updatedAt: subscription.updatedAt,
          accountId: subscription.accountId,
          platformsId: subscription.platformsId ?? undefined,
        }),
    );
  }
}
