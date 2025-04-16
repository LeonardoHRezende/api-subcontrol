import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/user.module';
import { PlatformsModule } from './modules/platforms/platform.module';

@Module({
  imports: [UsersModule, PlatformsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
