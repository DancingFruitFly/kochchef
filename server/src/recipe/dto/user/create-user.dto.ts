import {Role} from '../../entities/role.entity';

export class CreateUserDto {
  id: bigint;
  name: string;
  role: Role;
  passwordHash: string;
}
