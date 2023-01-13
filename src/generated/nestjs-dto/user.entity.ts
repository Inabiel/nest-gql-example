import { Role } from './role.entity';
import { Question } from './question.entity';

export class User {
  id: string;
  email: string;
  password: string;
  profile_picture: string | null;
  verified_at: Date | null;
  verification_code: string | null;
  created_at: Date;
  updated_at: Date;
  role_id: string | null;
  role?: Role | null;
  questions?: Question[];
}
