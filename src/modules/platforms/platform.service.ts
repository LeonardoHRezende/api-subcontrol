import { Injectable } from '@nestjs/common';
import { CreatePlatformUseCase } from './aplication/usecases/create-platform.usecase';
import { UpdatePlatformUseCase } from './aplication/usecases/update-platform.usecase';
import { FindByIdPlatformUseCase } from './aplication/usecases/findbyid.usecase';
import { DeletePlatformUseCase } from './aplication/usecases/delete-platform.usecase';
import {
  PlatformEntity,
  PlatformProps,
} from './domain/entities/platform.entity';

@Injectable()
export class PlatformService {
  constructor(
    private readonly createPlatformUseCase: CreatePlatformUseCase,
    private readonly updatePlatformUseCase: UpdatePlatformUseCase,
    private readonly findByIdPlatformUseCase: FindByIdPlatformUseCase,
    private readonly deletePlatformUseCase: DeletePlatformUseCase,
    private readonly createHistoricalPriceUseCase: CreatePlatformUseCase,
    private readonly getHistoricalPriceUseCase: CreatePlatformUseCase,
  ) {}

  async create(platformData: PlatformProps): Promise<void> {
    const platform = new PlatformEntity(platformData);
    return this.createPlatformUseCase.execute(platform);
  }

  async findById(platformId: string): Promise<PlatformEntity | null> {
    return this.findByIdPlatformUseCase.execute(platformId);
  }

  async update(platformData: PlatformProps): Promise<void> {
    const platform = new PlatformEntity(platformData);
    return this.updatePlatformUseCase.execute(platform);
  }

  async delete(platformId: string): Promise<void> {
    return this.deletePlatformUseCase.execute(platformId);
  }
}
