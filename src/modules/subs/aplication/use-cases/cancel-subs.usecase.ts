import { Inject, Injectable } from '@nestjs/common';
import { SubRepository } from '../../repositories/sub.repository';

@Injectable()
export class CancelSubsUseCase {
  constructor(
    @Inject('SubRepository')
    private readonly subRepository: SubRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const subscription = await this.subRepository.findById(id);
    if (!subscription) {
      throw new Error('Subscription not found');
    }
    subscription.cancelSubscription();
    await this.subRepository.update(subscription);
  }
}
