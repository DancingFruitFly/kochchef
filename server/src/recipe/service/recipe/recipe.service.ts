import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from '../../dto/recipe/create-recipe.dto';
import { UpdateRecipeDto } from '../../dto/recipe/update-recipe.dto';

@Injectable()
export class RecipeService {
  create(createRecipeDto: CreateRecipeDto) {
    return 'This action adds a new recipe';
  }

  findAll() {
    return `This action returns all recipe`;
  }

  findOne(id: bigint) {
    return `This action returns a #${id} recipe`;
  }

  update(id: bigint, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: bigint) {
    return `This action removes a #${id} recipe`;
  }
}
