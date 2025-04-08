import { UserRepository } from '../../repositories/user.respository';
import { UserEntity, UserProperties } from '../../domain/entities/user.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async execute(userData: UserProperties): Promise<UserEntity> {
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('Usuário com esse e-mail já existe.');
    }

    const user = new UserEntity(userData);
    await this.userRepository.create(user);
    return user;
  }
}
