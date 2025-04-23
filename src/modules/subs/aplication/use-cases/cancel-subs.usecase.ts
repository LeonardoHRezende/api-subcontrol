import {
  Injectable,
  Inject,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CancelSubscriptionDTO } from '../../domain/entities/sub.entity';
import { ISubRepository } from '../../repositories/sub.repository';

@Injectable()
export class CancelSubsUseCase {
  constructor(
    @Inject('SubRepository')
    private readonly subRepository: ISubRepository,
  ) {}

  async execute(data: CancelSubscriptionDTO): Promise<void> {
    if (!data.id) {
      throw new BadRequestException('ID da assinatura é obrigatório');
    }

    const subscription = await this.subRepository.findById(data.id);

    if (!subscription) {
      throw new NotFoundException('Assinatura não encontrada');
    }

    subscription.cancelSubscription();
    await this.subRepository.update(subscription);
  }
}
