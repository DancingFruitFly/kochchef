import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../dto/user/create-user.dto';
import { UpdateUserDto } from '../../dto/user/update-user.dto';
import { User } from '../../entities/user.entity';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const createdUser: CreateUserDto = this.create(createUserDto).then(
      (user) => user,
    );
    return Promise.resolve(createdUser);
  }

  async findUser(id: string): Promise<User> {
    const foundUser: User = await this.findUser(id).then((user) => user);
    return Promise.resolve(foundUser);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser: User = await this.update(id, updateUserDto).then(
      (user) => user,
    );
    return Promise.resolve(updatedUser);
  }

  async remove(id: string) {
    const removedUser: User = await this.remove(id).then((user) => user);
    return Promise.resolve(removedUser);
  }
}
