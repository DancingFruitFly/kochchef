import { User } from './user.entity';
import { Rating } from './rating.entity';
import { Ingredient } from './ingredient';
import { Comment } from './comment.entity';

export class Recipe {
  id: bigint;
  author: User;
  title: string;
  instructions: string;
  ingredients: Ingredient[];
  comments: Comment[];
  ratings: Rating[];
}
