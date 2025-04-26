import { Injectable, Inject } from '@nestjs/common';
import { IPlatformRepository } from '../../repositories/platform.respository';
import { PlatformEntity } from '../../domain/entities/platform.entity';

@Injectable()
export class ListPlatformUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly platformRepository: IPlatformRepository,
  ) {}

  async execute(): Promise<PlatformEntity[]> {
    return this.platformRepository.listAll();
  }
}
