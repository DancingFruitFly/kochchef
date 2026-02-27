import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from '../../dto/recipe/create-recipe.dto';
import { UpdateRecipeDto } from '../../dto/recipe/update-recipe.dto';
import { Recipe } from '../../entities/recipe.entity';

@Injectable()
export class RecipeService {
  create(createRecipeDto: CreateRecipeDto): Promise<CreateRecipeDto> {
    const createdRecipe: CreateRecipeDto = this.create(createRecipeDto).then(
      (recipe) => recipe,
    );
    return Promise.resolve(createdRecipe);
  }

  findAll(): Promise<Recipe[]> {
    const foundRecipes = this.findAll().then((recipes) => recipes);
    return Promise.resolve(foundRecipes);
  }

  async findOne(id: string): Promise<Recipe> {
    const foundRecipe: Recipe = await this.findOne(id).then((recipe) => recipe);
    return Promise.resolve(foundRecipe);
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    const updatedRecipe: Recipe = await this.update(id, updateRecipeDto).then(
      (recipe) => recipe,
    );
    return Promise.resolve(updatedRecipe);
  }

  async remove(id: string): Promise<Recipe> {
    const removedRecipe: Recipe = await this.remove(id).then(
      (recipe) => recipe,
    );
    return Promise.resolve(removedRecipe);
  }
}
