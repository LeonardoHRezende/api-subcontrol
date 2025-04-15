import { Injectable } from '@nestjs/common';
import { UserEntity } from './domain/entities/user.entity';
import { CreateUserUseCase } from './aplication/usecases/create-user.usecase';
import { FindByIdUserUseCase } from './aplication/usecases/findbyid-user.usecase';
import { UserProperties } from './domain/entities/user.entity';
import { FindByEmailUserUseCase } from './aplication/usecases/findbyemail-user.usecase copy';
import { UpdateUserUseCase } from './aplication/usecases/update-user.usecas';
import { DeleteUserUseCase } from './aplication/usecases/delete-user.usecase';

@Injectable()
export class UsersService {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findByIdUserUseCase: FindByIdUserUseCase,
    private readonly findByEmailUserUseCase: FindByEmailUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  async create(userData: UserProperties): Promise<UserEntity> {
    return this.createUserUseCase.execute(userData);
  }

  async findById(userId: string): Promise<UserEntity> {
    return this.findByIdUserUseCase.execute(userId);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return this.findByEmailUserUseCase.execute(email);
  }

  async update(userData: UserProperties): Promise<UserEntity> {
    const user = new UserEntity(userData);
    return this.updateUserUseCase.execute(user);
  }

  async delete(userId: string): Promise<void> {
    return this.deleteUserUseCase.execute(userId);
  }
}
