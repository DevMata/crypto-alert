import { Exclude, Expose, Type } from 'class-transformer';
import { AlertType } from '../../types/alert-type.enum';
import { CoinDto } from './coin.dto';

@Exclude()
export class AlertDto {
  @Expose()
  id: string;

  @Expose()
  type: AlertType;

  @Expose()
  amount: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  status: string;

  @Expose()
  execution: string;

  @Expose()
  executedAt?: Date;

  @Type(() => CoinDto)
  @Expose()
  coin?: CoinDto;

  @Expose()
  message?: string;
}
