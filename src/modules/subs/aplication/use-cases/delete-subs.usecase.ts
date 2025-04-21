import { Inject, Injectable } from '@nestjs/common';
import { SubRepository } from '../../repositories/sub.repository';

@Injectable()
export class DeleteSubsUseCase {
  constructor(
    @Inject('SubRepository')
    private readonly subRepository: SubRepository,
  ) {}

  async execute(id: string): Promise<void> {
    return await this.subRepository.delete(id);
  }
}
