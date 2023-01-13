import { Injectable } from '@nestjs/common';
import { hash, verify } from 'argon2';

@Injectable()
export class PasswordService {
  async hashPassword(password: string): Promise<string> {
    return await hash(password);
  }

  async verifyPassword(
    hashedPassword: string,
    password: string,
  ): Promise<Boolean> {
    return await verify(hashedPassword, password);
  }
}
