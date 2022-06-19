import { Exclude } from 'class-transformer';

@Exclude()
export class CoinDto {
  @Exclude()
  uuid: string;

  @Exclude()
  symbol: string;

  @Exclude()
  name: string;

  @Exclude()
  color: string;

  @Exclude()
  iconUrl: string;

  @Exclude()
  marketCap: string;

  @Exclude()
  price: string;

  @Exclude()
  btcPrice: string;

  @Exclude()
  listedAt: Date;

  @Exclude()
  change: string;
}
