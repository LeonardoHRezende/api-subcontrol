import { Injectable, Inject } from '@nestjs/common';
import { SubRepository } from '../../repositories/sub.repository';
import { SubscriptionEntity } from '../../domain/entities/sub.entity';

@Injectable()
export class UpdateSubsUseCase {
  constructor(
    @Inject('SubRepository')
    private readonly subRepository: SubRepository,
  ) {}

  async execute(subscription: SubscriptionEntity): Promise<void> {
    return await this.subRepository.update(subscription);
  }
}
