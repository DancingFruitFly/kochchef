import { User } from './user.entity';
import { Recipe } from './recipe.entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RatingDocument = HydratedDocument<Rating>;

@Schema()
export class Rating {
  id: bigint;
  author: User;
  recipe: Recipe;
  value: number;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
