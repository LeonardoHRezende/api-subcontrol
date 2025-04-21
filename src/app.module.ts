import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/user.module';
import { PlatformsModule } from './modules/platforms/platform.module';
import { SubsModule } from './modules/subs/subs.module';

@Module({
  imports: [UsersModule, PlatformsModule, SubsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
