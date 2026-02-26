import { Module } from '@nestjs/common';
import { RecipeController } from '../../controller/recipe/recipe.controller';
import { UserController } from '../../controller/user/user.controller';
import { RecipeService } from '../../service/recipe/recipe.service';
import { UserService } from '../../service/user/user.service';

@Module({
  controllers: [RecipeController, UserController],
  providers: [RecipeService, UserService],
})
export class RecipeModule {}
