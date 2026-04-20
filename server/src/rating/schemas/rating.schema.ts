import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type RatingDocument = HydratedDocument<Rating>;

@Schema({ timestamps: true })
export class Rating {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Recipe', required: true })
  recipe: Types.ObjectId;

  @Prop({ required: true, min: 1, max: 5 })
  value: number;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);

// one user can only rate one recipe once
RatingSchema.index({ author: 1, recipe: 1 }, { unique: true });