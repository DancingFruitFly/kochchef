import { User } from '../../entities/user.entity';
import { Ingredient } from '../../entities/ingredient';
import { Comment } from '../../entities/comment.entity';
import { Rating } from '../../entities/rating.entity';

export class CreateRecipeDto {
  id: bigint;
  author: User;
  title: string;
  instructions: string;
  ingredients: Ingredient[];
  comments: Comment[];
  ratings: Rating[];
}
