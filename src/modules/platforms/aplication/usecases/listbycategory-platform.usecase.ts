import { Injectable, Inject } from '@nestjs/common';
import { IPlatformRepository } from '../../repositories/platform.respository';
import { PlatformEntity } from '../../domain/entities/platform.entity';
import { PlatformCategory } from '../../domain/enums/platform.enum';

@Injectable()
export class ListByCategoryPlatformUseCase {
  constructor(
    @Inject('PlatformRepository')
    private readonly platformRepository: IPlatformRepository,
  ) {}

  async execute(category: PlatformCategory): Promise<PlatformEntity[]> {
    return this.platformRepository.filterByCategory(category);
  }
}
