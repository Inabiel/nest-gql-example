import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { PasswordService } from './password/password.service';
import { PasswordModule } from './password/password.module';

@Module({
  imports: [AppModule, AuthModule, PasswordModule],
  controllers: [AppController],
  providers: [AppService, PasswordService],
})
export class AppModule {}
