import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { HttpService } from '@nestjs/axios';
import { CoinDto } from '../../alerts/dtos/response/coin.dto';
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CoinrankingHttpService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getCoin(coinUUID: string): Promise<CoinDto> {
    try {
      const cachedCoin: string = await this.cacheManager.get(coinUUID);
      if (cachedCoin) {
        return plainToInstance(CoinDto, JSON.parse(cachedCoin));
      }

      const url = this.configService.get<string>('COINRANKING_URL');
      const api_key = this.configService.get<string>('COINRANKING_API_KEY');
      const {
        data: {
          data: { coin: fetchedCoin },
        },
      } = await this.httpService.axiosRef.get(`${url}/coin/${coinUUID}`, {
        headers: { 'x-access-token': api_key },
      });
      await this.cacheManager.set(coinUUID, JSON.stringify(fetchedCoin));
      return plainToInstance(CoinDto, fetchedCoin);
    } catch {
      return null;
    }
  }
}
