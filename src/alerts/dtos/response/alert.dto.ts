import { Exclude, Expose, Type } from 'class-transformer';
import { AlertType } from '../../types/alert-type.enum';
import { CoinDto } from './coin.dto';

@Exclude()
export class AlertDto {
  @Expose()
  id: string;

  @Expose()
  amount: number;

  @Expose()
  type: AlertType;

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
}
