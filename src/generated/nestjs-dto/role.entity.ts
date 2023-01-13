import { User } from './user.entity';

export class Role {
  id: string;
  name: string;
  description: string | null;
  users?: User[];
}
