import { IsString, MinLength } from 'class-validator';

export class AlertsValidationDto {
  @MinLength(24, { each: true })
  @IsString({ each: true })
  ids: string[];
}
