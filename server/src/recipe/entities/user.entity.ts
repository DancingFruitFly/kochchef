import { Role } from './role.entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  id: bigint;
  name: string;
  role: Role;
  passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
