import {
  IsEnum,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { AlertType } from '../../types/alert-type.enum';

export class CreateAlertDto {
  @MinLength(3)
  @IsString()
  uuid: string;

  @IsEnum(AlertType)
  type: AlertType;

  @IsPositive()
  @IsNumber()
  amount: number;
}
