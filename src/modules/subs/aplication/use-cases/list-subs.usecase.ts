import { Inject } from '@nestjs/common';
import { SubRepository } from '../../repositories/sub.repository';
import { SubscriptionEntity } from '../../domain/entities/sub.entity';

export class ListSubsUseCase {
  constructor(
    @Inject('SubRepository')
    private readonly subRepository: SubRepository,
  ) {}

  async execute(userId: string): Promise<SubscriptionEntity[] | null> {
    return await this.subRepository.listByUserId(userId);
  }
}
