import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema({ _id: false })
export class Ingredient {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true })
  amount: string;

  @Prop({ required: true, trim: true })
  unit: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);

@Schema({ timestamps: true })
export class Recipe {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  author: Types.ObjectId;

  @Prop({
    required: true,
    trim: true,
    maxlength: 200,
  })
  title: string;

  @Prop({
    required: true,
    trim: true,
  })
  instructions: string;

  @Prop({
    type: [IngredientSchema],
    required: true,
    default: [],
  })
  ingredients: Ingredient[];

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Comment' }],
    default: [],
  })
  comments: Types.ObjectId[];

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Rating' }],
    default: [],
  })
  ratings: Types.ObjectId[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);