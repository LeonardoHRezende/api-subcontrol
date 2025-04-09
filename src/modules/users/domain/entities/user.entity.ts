import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export interface UserProperties {
  id?: string;
  fullName: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class UserEntity {
  private props: Required<UserProperties>;

  constructor(props: UserProperties) {
    const now = new Date();

    this.props = {
      id: props.id ?? randomUUID(),
      fullName: props.fullName,
      email: props.email,
      createdAt: props.createdAt ?? now,
      updatedAt: props.updatedAt ?? now,
    };
  }

  get id() {
    return this.props.id;
  }

  get fullName() {
    return this.props.fullName;
  }

  get email() {
    return this.props.email;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  toObject() {
    return {
      id: this.id,
      full_name: this.fullName,
      email: this.email,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
    };
  }
}

export class CreateUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  email: string;
}

export class GetUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ type: String, format: 'date-time' })
  createdAt: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  updatedAt: Date;
}
