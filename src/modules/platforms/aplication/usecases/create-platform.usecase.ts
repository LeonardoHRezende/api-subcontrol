import { Injectable, Inject } from '@nestjs/common';
import { PlatformRepository } from '../../repositories/platform.respository';
import { PlatformEntity } from '../../domain/entities/platform.entity';

@Injectable()
export class CreatePlatformUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly userRepository: PlatformRepository,
  ) {}

  async execute(platform: PlatformEntity): Promise<void> {
    return await this.userRepository.create(platform);
  }
}
