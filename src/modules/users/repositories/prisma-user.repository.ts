import { PrismaClient } from '@prisma/client';
import { IUserRepository } from './user.respository';
import { UserEntity } from '../domain/entities/user.entity';
import { Roles } from '../domain/enums/roles';

export class UserPrismaRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.accounts.findUnique({
      where: { email },
    });
    return user
      ? new UserEntity({
          ...user,
          role: user.role as Roles,
        })
      : null;
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = await this.prisma.accounts.findUnique({
      where: { id },
    });
    return user
      ? new UserEntity({
          ...user,
          role: user.role as Roles,
        })
      : null;
  }

  async findByCompanyId(companyId: string): Promise<UserEntity[]> {
    const users = await this.prisma.accounts.findMany({
      where: { companyId },
    });

    return users.map(
      (user) =>
        new UserEntity({
          ...user,
          role: user.role as Roles,
        }),
    );
  }

  async create(user: UserEntity): Promise<void> {
    await this.prisma.accounts.create({
      data: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        companyName: user.companyName,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        company: {
          connectOrCreate: {
            where: {
              id: user.companyId,
            },
            create: {
              id: user.companyId,
              name: user.companyName,
            },
          },
        },
      },
    });
  }

  async update(user: UserEntity): Promise<void> {
    await this.prisma.accounts.update({
      where: { id: user.id },
      data: {
        email: user.email,
        fullName: user.fullName,
        companyId: user.companyId,
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
