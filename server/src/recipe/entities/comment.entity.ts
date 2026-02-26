import { User } from './user.entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  id: bigint;
  author: User;
  content: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
