import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDocument } from './schemas/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
  ) {}
  async create(data: { author: string; recipe: string; content: string }) {
    return this.commentModel.create(data);
  }

  async findByRecipe(recipeId: string) {
    return this.commentModel
      .find({ recipe: recipeId })
      .populate('author', 'username')
      .sort({ createdAt: -1 });
  }
}
