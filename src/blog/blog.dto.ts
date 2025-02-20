import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class BlogDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5, { message: 'Title is too short' })
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
