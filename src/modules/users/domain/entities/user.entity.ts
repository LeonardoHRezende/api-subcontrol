import { Roles } from '../enums/roles';
import { randomUUID } from 'crypto';

export interface UserProperties {
  id?: string;
  fullName: string;
  email: string;
  companyName: string;
  companyId?: string;
  role: Roles;
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
      companyName: props.companyName,
      companyId: props.companyId ?? randomUUID(),
      role: props.role,
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

  get companyName() {
    return this.props.companyName;
  }

  get companyId() {
    return this.props.companyId;
  }

  get role() {
    return this.props.role;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  updateRole(newRole: Roles) {
    this.props.role = newRole;
    this.props.updatedAt = new Date();
  }

  toObject() {
    return {
      id: this.id,
      full_name: this.fullName,
      email: this.email,
      company_name: this.companyName,
      role: this.role,
      created_at: this.createdAt,
      updated_at: this.updatedAt,
    };
  }
}
