import { User } from './user.entity';
import { Rating } from './rating.entity';
import { Ingredient } from './ingredient';
import { Comment } from './comment.entity';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema()
export class Recipe {
  id: bigint;
  author: User;
  title: string;
  instructions: string;
  ingredients: Ingredient[];
  comments: Comment[];
  ratings: Rating[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
