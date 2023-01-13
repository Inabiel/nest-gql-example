export class CreateUserDto {
  email: string;
  password: string;
  profile_picture?: string;
  verified_at?: Date;
  verification_code?: string;
}
