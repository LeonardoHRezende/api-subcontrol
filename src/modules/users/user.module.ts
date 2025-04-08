import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';

// Repositório
import { UserPrismaRepository } from '../users/repositories/prisma-user.repository';

// Use Cases
import { CreateUserUseCase } from '../users/aplication/usecases/create-user.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    UserPrismaRepository,

    // UseCases
    CreateUserUseCase,
  ],
})
export class UsersModule {}
