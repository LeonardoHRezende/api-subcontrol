import { UserRepository } from '../../repositories/user.respository';
import { UserEntity, UserProperties } from '../../domain/entities/user.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async execute(userData: UserProperties): Promise<UserEntity> {
    const user = new UserEntity(userData);
    await this.userRepository.update(user);
    return user;
  }
}
