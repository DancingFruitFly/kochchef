import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Recipe', required: true })
  recipe: Types.ObjectId;

  @Prop({ required: true, trim: true, maxlength: 1000 })
  content: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);