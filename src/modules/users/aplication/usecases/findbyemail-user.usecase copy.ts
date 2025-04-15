import { UserRepository } from '../../repositories/user.respository';
import { UserEntity } from '../../domain/entities/user.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class FindByEmailUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async execute(email: string): Promise<UserEntity> {
    const userFound = await this.userRepository.findByEmail(email);
    if (!userFound) {
      throw new Error('Não encontrado');
    }

    return userFound;
  }
}
