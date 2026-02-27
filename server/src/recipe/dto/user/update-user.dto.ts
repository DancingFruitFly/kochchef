import { CreateUserDto } from './create-user.dto';
import { Role } from '../../entities/role.entity';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  name: string;
  role: Role;
  passwordHash: string;
}
