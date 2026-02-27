import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeDto } from './create-recipe.dto';
import { Ingredient } from '../../entities/ingredient';
import { Comment } from '../../entities/comment.entity';
import { Rating } from '../../entities/rating.entity';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
  title: string;
  instructions: string;
  ingredients: Ingredient[];
  comments: Comment[];
  ratings: Rating[];
}
