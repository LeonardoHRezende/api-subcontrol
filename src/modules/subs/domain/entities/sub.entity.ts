import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { SubRecurrence, SubStatus } from '../enums/sub.enum';

export interface SubscriptionProps {
  id?: string;
  accountId: string;
  platformsId?: string;
  plan: string;
  tag?: string;
  customPrice?: number;
  recurrence: SubRecurrence;
  status: SubStatus;
  startDate: Date;
  canceledAt?: Date;
  updatedAt?: Date;
  createdAt?: Date;
}

export class SubscriptionEntity {
  id?: string;
  accountId: string;
  platformsId?: string;
  plan: string;
  tag?: string;
  customPrice?: number;
  recurrence: SubRecurrence;
  status: SubStatus;
  startDate: Date;
  canceledAt?: Date;
  updatedAt?: Date;
  createdAt?: Date;

  constructor(props: SubscriptionProps) {
    this.id = props?.id ?? randomUUID();
    this.accountId = props?.accountId;
    this.platformsId = props?.platformsId;
    this.plan = props?.plan;
    this.tag = props?.tag;
    this.customPrice = props?.customPrice;
    this.recurrence = props?.recurrence ?? 'MONTHLY';
    this.status = props?.status ?? 'ACTIVE';
    this.startDate = props?.startDate;
    this.canceledAt = props?.canceledAt;
    this.updatedAt = props?.updatedAt;
  }

  get Id(): string {
    return this?.id ?? randomUUID();
  }

  get Plan(): string {
    return this.plan;
  }

  get CustomPrice(): number | undefined {
    return this.customPrice;
  }

  get Recurrence(): SubRecurrence {
    return this.recurrence ?? 'MONTHLY';
  }

  get Status(): SubStatus {
    return this.status ?? 'ACTIVE';
  }

  get StartDate(): Date {
    return this.startDate ?? new Date();
  }

  get CanceledAt(): Date {
    return this.canceledAt ?? new Date();
  }

  get UpdatedAt(): Date {
    return this.updatedAt ?? new Date();
  }

  get CreatedAt(): Date {
    return this.createdAt ?? new Date();
  }

  get Tag(): string {
    return this.tag ?? '';
  }

  get AccountId(): string {
    return this.accountId;
  }

  get PlatformsId(): string {
    return this.platformsId ?? '';
  }

  cancelSubscription(): void {
    this.status = 'CANCELED';
    this.canceledAt = new Date();
  }

  toObject(): SubscriptionProps {
    return {
      id: this.id,
      accountId: this.accountId,
      platformsId: this.platformsId,
      plan: this.plan,
      tag: this.tag,
      customPrice: this.customPrice,
      recurrence: this.recurrence,
      status: this.status,
      startDate: this.startDate,
      canceledAt: this.canceledAt,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
    };
  }
}

export class SubscriptionDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  accountId: string;

  @ApiProperty()
  platformsId: string;

  @ApiProperty()
  plan: string;

  @ApiProperty({ required: false })
  tag?: string;

  @ApiProperty({ required: false })
  customPrice?: number;

  @ApiProperty({ enum: ['MONTHLY', 'YEARLY'] })
  recurrence: SubRecurrence;

  @ApiProperty({ enum: ['ACTIVE', 'WARNING', 'CANCELED'] })
  status: SubStatus;

  @ApiProperty()
  startDate: Date;

  @ApiProperty({ required: false, nullable: true })
  canceledAt?: Date;

  @ApiProperty({ required: false })
  updatedAt?: Date;

  @ApiProperty({ required: false })
  createdAt?: Date;
}

export class UpdateSubscriptionDTO {
  @ApiProperty({ required: false })
  id?: string;

  @ApiProperty({ required: false })
  accountId?: string;

  @ApiProperty({ required: false })
  platformsId?: string;

  @ApiProperty({ required: false })
  plan?: string;

  @ApiProperty({ required: false })
  tag?: string;

  @ApiProperty({ required: false })
  customPrice?: number;

  @ApiProperty({ enum: ['MONTHLY', 'YEARLY'], required: false })
  recurrence?: SubRecurrence;

  @ApiProperty({ enum: ['ACTIVE', 'WARNING', 'CANCELED'], required: false })
  status?: SubStatus;

  @ApiProperty({ required: false })
  startDate?: Date;
}

export class CancelSubscriptionDTO {
  @ApiProperty({ required: false })
  id?: string;

  @ApiProperty({
    required: false,
    description: 'Motivo opcional para o cancelamento da assinatura',
  })
  cancelReason?: string;
}
