import { Injectable, Inject } from '@nestjs/common';
import { IPlatformRepository } from '../../repositories/platform.respository';
import { PlatformEntity } from '../../domain/entities/platform.entity';

@Injectable()
export class ListByNamePlatformUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly platformRepository: IPlatformRepository,
  ) {}

  async execute(name: string): Promise<PlatformEntity[]> {
    return this.platformRepository.searchByName(name);
  }
}
