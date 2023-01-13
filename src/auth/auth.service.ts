import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { Inject } from '@nestjs/common/decorators';
import { PasswordService } from 'src/password/password.service';
import { JwtService } from '@nestjs/jwt';
import { config } from 'dotenv';
config();

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private password: PasswordService,
  ) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    let token = await this.jwt.sign(data.email);
    let hashPassword = await this.password.hashPassword(data.password);
    let createUser = await this.prisma.user.create({
      data: {
        email: data.email,
        verification_code: token,
        password: hashPassword,
      },
    });
    if (createUser) {
      return;
    }
  }
}
