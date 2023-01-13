import { Question } from './question.entity';

export class Answer {
  id: string;
  question_id: string | null;
  answer: string;
  question?: Question | null;
}
