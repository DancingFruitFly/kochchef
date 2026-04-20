import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsMongoId()
  recipe: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
