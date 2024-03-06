import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { StatusEnum } from '../entities/card.entity';

export class CreateCardDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(2, { message: 'Description must have atleast 2 characters.' })
  @IsNotEmpty()
  description: string;

  @IsEnum(StatusEnum, { message: 'Invalid status.' })
  @IsOptional()
  status?: StatusEnum;
}
