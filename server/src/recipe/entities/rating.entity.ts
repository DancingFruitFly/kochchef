import { User } from './user.entity';
import { Recipe } from './recipe.entity';

export class Rating {
  id: bigint;
  author: User;
  recipe: Recipe;
  value: number;
}
