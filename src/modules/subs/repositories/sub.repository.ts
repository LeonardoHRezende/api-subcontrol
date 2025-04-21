import { SubscriptionEntity } from '../domain/entities/sub.entity';

export interface ISubRepository {
  findById(id: string): Promise<SubscriptionEntity | null>;
  create(subscription: SubscriptionEntity): Promise<void>;
  update(subscription: SubscriptionEntity): Promise<void>;
  delete(id: string): Promise<void>;
  listByUserId(userId: string): Promise<SubscriptionEntity[] | null>;
}

export class SubRepository implements ISubRepository {
  private subscriptions: SubscriptionEntity[] = [];

  async findById(id: string): Promise<SubscriptionEntity | null> {
    const found = this.subscriptions.find(
      (subscription) => subscription.id === id,
    );
    return await Promise.resolve(found ?? null);
  }

  async create(subscription: SubscriptionEntity): Promise<void> {
    this.subscriptions.push(subscription);
    await Promise.resolve();
  }

  async update(subscription: SubscriptionEntity): Promise<void> {
    const index = this.subscriptions.findIndex((s) => s.id === subscription.id);
    if (index !== -1) {
      this.subscriptions[index] = subscription;
      await Promise.resolve();
    } else {
      await Promise.reject(new Error('Subscription not found'));
    }
  }

  async delete(id: string): Promise<void> {
    this.subscriptions = this.subscriptions.filter((s) => s.id !== id);
    await Promise.resolve();
  }

  async listByUserId(userId: string): Promise<SubscriptionEntity[] | null> {
    const list = this.subscriptions.filter((s) => s.accountId === userId);
    return await Promise.resolve(list.length > 0 ? list : null);
  }
}
