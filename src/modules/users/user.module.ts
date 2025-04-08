import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';

// Repositório
import { UserPrismaRepository } from '../users/repositories/prisma-user.repository';

// Use Cases
import { CreateUserUseCase } from '../users/aplication/usecases/create-user.usecase';
import { FindByIdUserUseCase } from '../users/aplication/usecases/findbyid.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UserRepository',
      useClass: UserPrismaRepository,
    },
    CreateUserUseCase,
    FindByIdUserUseCase,
  ],
})
export class UsersModule {}
