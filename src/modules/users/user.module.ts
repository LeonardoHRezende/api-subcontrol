import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';

// Repositório
import { UserPrismaRepository } from '../users/repositories/prisma-user.repository';

// Use Cases
import { CreateUserUseCase } from '../users/aplication/usecases/create-user.usecase';
import { FindByIdUserUseCase } from './aplication/usecases/findbyid-user.usecase';
import { UpdateUserUseCase } from './aplication/usecases/update-user.usecas';
import { DeleteUserUseCase } from './aplication/usecases/delete-user.usecase';

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
    UpdateUserUseCase,
    DeleteUserUseCase,
  ],
})
export class UsersModule {}
