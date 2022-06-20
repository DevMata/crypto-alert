import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CoinDto {
  @Expose()
  uuid: string;

  @Expose()
  symbol: string;

  @Expose()
  name: string;

  @Expose()
  color: string;

  @Expose()
  iconUrl: string;

  @Expose()
  marketCap: string;

  @Expose()
  price: string;

  @Expose()
  btcPrice: string;

  @Expose()
  listedAt: Date;

  @Expose()
  change: string;
}
