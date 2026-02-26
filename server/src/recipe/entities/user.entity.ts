import { Role } from './role.entity';

export class User {
  id: bigint;
  name: string;
  role: Role;
  passwordHash: string;
}
