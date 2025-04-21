import { Inject, Injectable } from '@nestjs/common';
import { SubscriptionEntity } from '../../domain/entities/sub.entity';
import { SubRepository } from '../../repositories/sub.repository';

@Injectable()
export class FindUniqueSubsUseCase {
  constructor(
    @Inject('SubRepository')
    private readonly subRepository: SubRepository,
  ) {}

  async execute(id: string): Promise<SubscriptionEntity | null> {
    return await this.subRepository.findById(id);
  }
}
