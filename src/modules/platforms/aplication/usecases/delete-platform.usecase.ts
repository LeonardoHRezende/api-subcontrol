import { Injectable, Inject } from '@nestjs/common';
import { PlatformRepository } from '../../repositories/platform.respository';

@Injectable()
export class DeletePlatformUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly platformRepository: PlatformRepository,
  ) {}

  async execute(platformId: string): Promise<void> {
    return await this.platformRepository.delete(platformId);
  }
}
