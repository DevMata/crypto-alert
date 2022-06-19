import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { AlertSortBy } from '../../types/alert-sort-by.enum';

export class AlertsQueryDto {
  @IsOptional()
  @MinLength(3)
  @IsString()
  filterBy?: string;

  @IsOptional()
  @IsEnum(AlertSortBy, {
    each: true,
    message: 'sortBy accepted values createdAt:asc, createdAt:desc, type',
  })
  sortBy?: AlertSortBy[];
}
