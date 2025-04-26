import { Injectable, Inject } from '@nestjs/common';
import { IUserRepository } from '../../repositories/user.respository';
import { TermsAcceptanceDto } from '../../domain/entities/user.entity';

@Injectable()
export class AcceptTermsUserUseCase {
  constructor(
    @Inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(termsData: TermsAcceptanceDto): Promise<void> {
    const user = await this.userRepository.findById(termsData.userId);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    if (termsData.accept) {
      user.acceptTerms();
      await this.userRepository.update(user);
    } else {
      throw new Error(
        'Os termos de uso devem ser aceitos para utilizar a plataforma',
      );
    }
  }
}
