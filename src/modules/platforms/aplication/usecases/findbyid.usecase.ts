import { Injectable, Inject } from '@nestjs/common';
import { PlatformRepository } from '../../repositories/platform.respository';
import { PlatformEntity } from '../../domain/entities/platform.entity';

@Injectable()
export class FindByIdPlatformUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly userRepository: PlatformRepository,
  ) {}

  async execute(platformId: string): Promise<PlatformEntity | null> {
    return await this.userRepository.findById(platformId);
  }
}
