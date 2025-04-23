import { Injectable } from '@nestjs/common';
import { CreateSubsUseCase } from './aplication/use-cases/create-subs.usecase';
import { UpdateSubsUseCase } from './aplication/use-cases/update-subs.usecase';
import { DeleteSubsUseCase } from './aplication/use-cases/delete-subs.usecase';
import { FindUniqueSubsUseCase } from './aplication/use-cases/findunique-subs.usecase';
import { ListSubsUseCase } from './aplication/use-cases/list-subs.usecase';
import { CancelSubsUseCase } from './aplication/use-cases/cancel-subs.usecase';
import {
  SubscriptionEntity,
  SubscriptionDTO,
  UpdateSubscriptionDTO,
  CancelSubscriptionDTO,
} from './domain/entities/sub.entity';

@Injectable()
export class SubsService {
  constructor(
    private readonly createSubsUseCase: CreateSubsUseCase,
    private readonly updateSubsUseCase: UpdateSubsUseCase,
    private readonly deleteSubsUseCase: DeleteSubsUseCase,
    private readonly findUniqueSubsUseCase: FindUniqueSubsUseCase,
    private readonly listSubsUseCase: ListSubsUseCase,
    private readonly cancelSubsUseCase: CancelSubsUseCase,
  ) {}

  async create(subscription: SubscriptionDTO): Promise<void> {
    const subscriptionEntity = new SubscriptionEntity(subscription);
    return this.createSubsUseCase.execute(subscriptionEntity);
  }

  async update(subscription: UpdateSubscriptionDTO): Promise<void> {
    const subscriptionEntity = new SubscriptionEntity(
      subscription as SubscriptionDTO,
    );
    return this.updateSubsUseCase.execute(subscriptionEntity);
  }

  async cancelSubscription(data: CancelSubscriptionDTO): Promise<void> {
    return this.cancelSubsUseCase.execute(data);
  }

  async delete(id: string): Promise<void> {
    return this.deleteSubsUseCase.execute(id);
  }

  async findUnique(id: string): Promise<SubscriptionEntity | null> {
    return this.findUniqueSubsUseCase.execute(id);
  }

  async list(userId: string): Promise<SubscriptionEntity[] | null> {
    return this.listSubsUseCase.execute(userId);
  }
}
