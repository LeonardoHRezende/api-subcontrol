import { Injectable, Inject } from '@nestjs/common';
import { IPlatformRepository } from '../../repositories/platform.respository';

@Injectable()
export class DeletePlatformUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly platformRepository: IPlatformRepository,
  ) {}

  async execute(platformId: string): Promise<void> {
    return await this.platformRepository.delete(platformId);
  }
}
