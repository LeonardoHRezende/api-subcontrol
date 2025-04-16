import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export interface HistoryPriceProps {
  id?: string;
  platformId: string;
  monthlyPrice: number;
  yearlyPrice: number;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export class HistoryPriceEntity {
  id: string;
  platformId: string;
  monthlyPrice: number;
  yearlyPrice: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: HistoryPriceProps) {
    this.id = props.id ?? randomUUID();
    this.platformId = props.platformId;
    this.monthlyPrice = props.monthlyPrice;
    this.yearlyPrice = props.yearlyPrice;
    this.date = props.date;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
  }

  get Id(): string {
    return this.id;
  }
  get PlatformId(): string {
    return this.platformId;
  }
  get MonthlyPrice(): number {
    return this.monthlyPrice;
  }
  get YearlyPrice(): number {
    return this.yearlyPrice;
  }
  get Date(): Date {
    return this.date;
  }
  get CreatedAt(): Date {
    return this.createdAt;
  }
  get UpdatedAt(): Date {
    return this.updatedAt;
  }

  toObject(): HistoryPriceProps {
    return {
      id: this.id,
      platformId: this.platformId,
      monthlyPrice: this.monthlyPrice,
      yearlyPrice: this.yearlyPrice,
      date: this.date,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

export class HistoryPriceDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  platformId: string;

  @ApiProperty()
  monthlyPrice: number;

  @ApiProperty()
  yearlyPrice: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
