import { UserRepository } from '../../repositories/user.respository';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async execute(userId: string): Promise<void> {
    return await this.userRepository.delete(userId);
  }
}
