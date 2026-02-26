import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/user/create-user.dto';
import { UpdateUserDto } from '../../dto/user/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findUser(id: bigint) {
    return 'This action returns a #${id} user';
  }

  update(id: bigint, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: bigint) {
    return `This action removes a #${id} user`;
  }
}
