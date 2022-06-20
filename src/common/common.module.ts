import { Module } from '@nestjs/common';
import { CoinrankingHttpService } from './services/coinranking-http-service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 1000,
    }),
  ],
  providers: [CoinrankingHttpService],
  exports: [CoinrankingHttpService],
})
export class CommonModule {}
