import { PrismaClient } from '@prisma/client';
import { IUserRepository } from './user.respository';
import { UserEntity } from '../domain/entities/user.entity';

export class UserPrismaRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.accounts.findUnique({
      where: { email },
    });
    if (!user) return null;
    return new UserEntity(user);
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.prisma.accounts.findUnique({
      where: { id },
    });

    if (!user) return null;

    return new UserEntity(user);
  }

  async create(user: UserEntity): Promise<void> {
    await this.prisma.accounts.create({
      data: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  }

  async update(user: UserEntity): Promise<void> {
    await this.prisma.accounts.update({
      where: { id: user.id },
      data: {
        email: user.email,
        fullName: user.fullName,
        updatedAt: user.updatedAt,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.accounts.delete({
      where: { id },
    });
  }
}
