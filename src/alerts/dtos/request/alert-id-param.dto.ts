import { MinLength } from 'class-validator';

export class AlertIdParamDto {
  @MinLength(24)
  alertId: string;
}
