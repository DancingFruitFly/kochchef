import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rating, RatingDocument } from './schemas/rating.schema';
import { Recipe, RecipeDocument } from '../recipe/schemas/recipe.schema';
import { Types } from 'mongoose';
@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating.name)
    private readonly ratingModel: Model<RatingDocument>,
    @InjectModel(Recipe.name)
    private readonly recipeModel: Model<RecipeDocument>,
  ) {}
  async createOrUpdate(data: {
    author: string;
    recipe: string;
    value: number;
  }) {
    const recipeExists = await this.recipeModel.exists({ _id: data.recipe });

    if (!recipeExists) {
      throw new NotFoundException('Recipe not found');
    }

    const rating = await this.ratingModel.findOneAndUpdate(
      {
        author: data.author,
        recipe: data.recipe,
      },
      {
        $set: {
          value: data.value,
        },
      },
      {
        new: true,
        upsert: true,
      },
    );

    return rating;
  }

  async findByRecipe(recipeId: string) {
    return this.ratingModel
      .find({ recipe: recipeId })
      .populate('author', 'username')
      .sort({ createdAt: -1 });
  }

  async getAverageForRecipe(recipeId: string) {
    const result = await this.ratingModel.aggregate([
      {
        $match: {
          recipe: this.toObjectId(recipeId),
        },
      },
      {
        $group: {
          _id: '$recipe',
          averageRating: { $avg: '$value' },
          ratingCount: { $sum: 1 },
        },
      },
    ]);

    if (!result.length) {
      return {
        averageRating: 0,
        ratingCount: 0,
      };
    }

    return {
      averageRating: Number(result[0].averageRating.toFixed(1)),
      ratingCount: result[0].ratingCount,
    };
  }

  private toObjectId(id: string) {
    return new Types.ObjectId(id);
  }
}
