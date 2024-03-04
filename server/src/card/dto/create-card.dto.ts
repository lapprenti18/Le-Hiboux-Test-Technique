import {
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCardDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(2, { message: 'Description must have atleast 2 characters.' })
  @IsNotEmpty()
  description: string;
}
