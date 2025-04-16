import { Injectable, Inject } from '@nestjs/common';
import { PlatformRepository } from '../../repositories/platform.respository';

@Injectable()
export class DeletePlatformUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly userRepository: PlatformRepository,
  ) {}

  async execute(platformId: string): Promise<void> {
    return await this.userRepository.delete(platformId);
  }
}
