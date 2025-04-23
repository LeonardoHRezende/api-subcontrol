import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export interface UserProperties {
  id?: string;
  fullName: string;
  email: string;
  termsAccepted?: boolean;
  termsAcceptedAt?: Date | null;
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
      termsAccepted: props.termsAccepted ?? false,
      termsAcceptedAt: props.termsAcceptedAt ?? null,
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

  get termsAccepted() {
    return this.props.termsAccepted;
  }

  get termsAcceptedAt() {
    return this.props.termsAcceptedAt;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  acceptTerms() {
    this.props.termsAccepted = true;
    this.props.termsAcceptedAt = new Date();
    this.props.updatedAt = new Date();
  }

  toObject() {
    return {
      id: this.id,
      fullName: this.fullName,
      email: this.email,
      termsAccepted: this.termsAccepted,
      termsAcceptedAt: this.termsAcceptedAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
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

  @ApiProperty({ required: false, default: false })
  termsAccepted?: boolean;
}

export class GetUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  termsAccepted: boolean;

  @ApiProperty({ type: String, format: 'date-time', nullable: true })
  termsAcceptedAt: Date | null;

  @ApiProperty({ type: String, format: 'date-time' })
  createdAt: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  updatedAt: Date;
}

export class TermsAcceptanceDto {
  @ApiProperty()
  userId: string;

  @ApiProperty({ default: true })
  accept: boolean;
}
