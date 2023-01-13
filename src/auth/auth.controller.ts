import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('register')
  async createUser() {
    return 'test';
  }
}
