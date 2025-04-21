import { Module } from '@nestjs/common';
import { SubsController } from './subs.controller';
import { SubsService } from './subs.service';

// Repositório
import { SubPrismaRepository } from './repositories/prisma-sub.repository';

// Use Cases
import { CreateSubsUseCase } from './aplication/use-cases/create-subs.usecase';
import { UpdateSubsUseCase } from './aplication/use-cases/update-subs.usecase';
import { DeleteSubsUseCase } from './aplication/use-cases/delete-subs.usecase';
import { FindUniqueSubsUseCase } from './aplication/use-cases/findunique-subs.usecase';
import { ListSubsUseCase } from './aplication/use-cases/list-subs.usecase';

@Module({
  controllers: [SubsController],
  providers: [
    SubsService,
    {
      provide: 'SubRepository',
      useClass: SubPrismaRepository,
    },
    CreateSubsUseCase,
    UpdateSubsUseCase,
    DeleteSubsUseCase,
    FindUniqueSubsUseCase,
    ListSubsUseCase,
  ],
})
export class SubsModule {}
