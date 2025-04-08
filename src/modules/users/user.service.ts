import { Injectable } from '@nestjs/common';
import { UserEntity } from './domain/entities/user.entity';
import { CreateUserUseCase } from './aplication/usecases/create-user.usecase';
import { FindByIdUserUseCase } from './aplication/usecases/findbyid.usecase';
import { UserProperties } from './domain/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findByIdUserUseCase: FindByIdUserUseCase,
  ) {}

  async create(userData: UserProperties): Promise<UserEntity> {
    return this.createUserUseCase.execute(userData);
  }

  async findById(userId: string): Promise<UserEntity> {
    return this.findByIdUserUseCase.execute(userId);
  }
}
