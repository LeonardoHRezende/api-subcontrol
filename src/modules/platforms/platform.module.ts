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
import { FindHistoricalPriceByPlatformUseCase } from './aplication/usecases/findbyplatformid-prices.usecase';
import { UpdatePricesUseCase } from './aplication/usecases/update-prices.usecase';
import { CreatePriceUseCase } from './aplication/usecases/create-prices.usecase';
import { ListByNamePlatformUseCase } from './aplication/usecases/listbyname-platform.usecase';
import { ListByCategoryPlatformUseCase } from './aplication/usecases/listbycategory-platform.usecase';
import { ListPlatformUseCase } from './aplication/usecases/list-platform.usecase';
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
    FindHistoricalPriceByPlatformUseCase,
    UpdatePricesUseCase,
    CreatePriceUseCase,
    ListPlatformUseCase,
    ListByNamePlatformUseCase,
    ListByCategoryPlatformUseCase,
  ],
})
export class PlatformsModule {}
