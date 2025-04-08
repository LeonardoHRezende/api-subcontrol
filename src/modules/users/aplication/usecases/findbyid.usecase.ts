import { UserRepository } from '../../repositories/user.respository';
import { UserEntity } from '../../domain/entities/user.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class FindByIdUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async execute(userId: string): Promise<UserEntity> {
    const userFound = await this.userRepository.findById(userId);
    if (!userFound) {
      throw new Error('Não encontrado');
    }

    return userFound;
  }
}
