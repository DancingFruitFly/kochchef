import { User } from './user.entity';

export class Comment {
  id: bigint;
  author: User;
  content: string;
}
