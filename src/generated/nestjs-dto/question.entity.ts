import { User } from './user.entity';
import { Answer } from './answer.entity';

export class Question {
  id: string;
  user_id: string | null;
  sender_ip: string | null;
  image: string | null;
  question: string;
  user?: User | null;
  answer?: Answer | null;
}
