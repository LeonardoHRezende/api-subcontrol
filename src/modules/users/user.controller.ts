import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserProperties } from './domain/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: UserProperties) {
    return this.usersService.create(data);
  }
}
