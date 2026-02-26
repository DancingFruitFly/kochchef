import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IngredientDocument = HydratedDocument<Ingredient>;

@Schema()
export class Ingredient {
  id: bigint;
  name: string;
  amount: number;
  unit: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
