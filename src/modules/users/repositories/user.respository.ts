import { UserEntity } from '../domain/entities/user.entity';

export interface IUserRepository {
  findByEmail(email: string): Promise<UserEntity | null>;
  findById(id: string): Promise<UserEntity | null>;
  create(user: UserEntity): Promise<void>;
  update(user: UserEntity): Promise<void>;
  delete(id: string): Promise<void>;
}

export class UserRepository implements IUserRepository {
  private users: UserEntity[] = [];

  findByEmail(email: string): Promise<UserEntity | null> {
    const user = this.users.find((user) => user.email === email) || null;
    return Promise.resolve(user);
  }

  findById(id: string): Promise<UserEntity | null> {
    const user = this.users.find((user) => user.id === id) || null;
    return Promise.resolve(user);
  }

  create(user: UserEntity): Promise<void> {
    this.users.push(user);
    return Promise.resolve();
  }

  update(user: UserEntity): Promise<void> {
    const index = this.users.findIndex(
      (existingUser) => existingUser.id === user.id,
    );
    if (index !== -1) {
      this.users[index] = user;
    }
    return Promise.resolve();
  }

  delete(id: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== id);
    return Promise.resolve();
  }
}
