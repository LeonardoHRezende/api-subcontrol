import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { CreateUserUseCase } from './aplication/usecases/create-user.usecase';
import { FindByIdUserUseCase } from './aplication/usecases/findbyid-user.usecase';
import { FindByEmailUserUseCase } from './aplication/usecases/findbyemail-user.usecase copy';
import { UpdateUserUseCase } from './aplication/usecases/update-user.usecas';
import { DeleteUserUseCase } from './aplication/usecases/delete-user.usecase';
import { AcceptTermsUserUseCase } from './aplication/usecases/accept-terms-user.usecase';
import { UserPrismaRepository } from './repositories/prisma-user.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserUseCase,
    FindByIdUserUseCase,
    FindByEmailUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    AcceptTermsUserUseCase,
    {
      provide: 'UserRepository',
      useClass: UserPrismaRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
