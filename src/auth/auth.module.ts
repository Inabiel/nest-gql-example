import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PasswordModule } from 'src/password/password.module';
import { JwtModule } from '@nestjs/jwt/dist';
import { config } from 'dotenv';
config();

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    PasswordModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
})
export class AuthModule {}
