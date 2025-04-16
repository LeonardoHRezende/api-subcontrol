import { Module } from '@nestjs/common';
import { PlatformsController } from './platform.controller';
import { PlatformService } from './platform.service';

// Repositório
import { PlatformPrismaRepository } from './repositories/prisma-platform.repository';

// Use Cases
import { CreatePlatformUseCase } from './aplication/usecases/create-platform.usecase';
import { FindByIdPlatformUseCase } from './aplication/usecases/findbyid.usecase';
import { DeletePlatformUseCase } from './aplication/usecases/delete-platform.usecase';
import { UpdatePlatformUseCase } from './aplication/usecases/update-platform.usecase';

@Module({
  controllers: [PlatformsController],
  providers: [
    PlatformService,
    {
      provide: 'PlatformRepository',
      useClass: PlatformPrismaRepository,
    },
    CreatePlatformUseCase,
    FindByIdPlatformUseCase,
    DeletePlatformUseCase,
    UpdatePlatformUseCase,
  ],
})
export class PlatformsModule {}
