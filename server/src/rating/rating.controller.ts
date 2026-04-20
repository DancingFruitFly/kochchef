import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  createOrUpdate(
    @Body() dto: CreateRatingDto,
    @CurrentUser() user: { userId: string },
  ) {
    return this.ratingService.createOrUpdate({
      ...dto,
      author: user.userId,
    });
  }

  @Get('recipe/:recipeId')
  findByRecipe(@Param('recipeId') recipeId: string) {
    return this.ratingService.findByRecipe(recipeId);
  }

  @Get('recipe/:recipeId/average')
  getAverage(@Param('recipeId') recipeId: string) {
    return this.ratingService.getAverageForRecipe(recipeId);
  }
}
