import { IsInt, IsMongoId, Max, Min } from 'class-validator';

export class CreateRatingDto {
  @IsMongoId()
  recipe: string;

  @IsInt()
  @Min(1)
  @Max(5)
  value: number;
}
