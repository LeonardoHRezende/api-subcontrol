import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { PlatformCategory } from '../enums/platform.enum';

export interface PlatformProps {
  id?: string;
  name: string;
  category: PlatformCategory;
  websiteUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
  canceledAt?: Date;
}

export class PlatformEntity {
  id: string;
  name: string;
  category: PlatformCategory;
  websiteUrl: string;
  createdAt: Date;
  updatedAt: Date;
  canceledAt?: Date;

  constructor(props: PlatformProps) {
    this.id = props.id ?? randomUUID();
    this.name = props.name;
    this.category = props.category;
    this.websiteUrl = props.websiteUrl;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
    this.canceledAt = props.canceledAt ?? undefined;
  }

  get Id(): string {
    return this.id;
  }
  get Name(): string {
    return this.name;
  }
  get Category(): PlatformCategory {
    return this.category;
  }
  get WebsiteUrl(): string {
    return this.websiteUrl;
  }
  get CreatedAt(): Date {
    return this.createdAt;
  }
  get UpdatedAt(): Date {
    return this.updatedAt;
  }
  get CanceledAt(): Date | undefined {
    return this.canceledAt;
  }

  toObject(): PlatformProps {
    return {
      id: this.id,
      name: this.name,
      category: this.category,
      websiteUrl: this.websiteUrl,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      canceledAt: this.canceledAt,
    };
  }
}

export class PlatformDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  category: PlatformCategory;

  @ApiProperty()
  websiteUrl: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  canceledAt?: Date;
}
