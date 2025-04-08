import { Injectable } from '@nestjs/common';
import { UserEntity } from './domain/entities/user.entity';
import { CreateUserUseCase } from './aplication/usecases/create-user.usecase';
import { UserProperties } from './domain/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async create(userData: UserProperties): Promise<UserEntity> {
    return this.createUserUseCase.execute(userData);
  }
}
