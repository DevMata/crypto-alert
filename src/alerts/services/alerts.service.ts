import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Alert, AlertDocument } from '../database/alert.schema';
import { Model } from 'mongoose';
import { plainToInstance } from 'class-transformer';
import { CreateAlertDto } from '../dtos/request/create-alert.dto';
import { AlertDto } from '../dtos/response/alert.dto';
import { CoinrankingHttpService } from '../../common/services/coinranking-http-service';

@Injectable()
export class AlertsService {
  constructor(
    @InjectModel(Alert.name) private readonly alertModel: Model<AlertDocument>,
    private readonly coinrankingHttpService: CoinrankingHttpService,
  ) {}

  async getAlerts(): Promise<AlertDto[]> {
    const alerts = await this.alertModel.find();

    return plainToInstance(AlertDto, alerts);
  }

  async getValidatedAlerts(): Promise<AlertDto[]> {
    const alerts = await this.alertModel.find().where('execution').ne('task');

    return plainToInstance(AlertDto, alerts);
  }

  async createAlert(createAlertDto: CreateAlertDto): Promise<AlertDto> {
    const coin = await this.coinrankingHttpService.getCoin(createAlertDto.uuid);
    if (!coin) {
      throw new NotFoundException(`Coin ${createAlertDto.uuid} not found.`);
    }

    const newAlert = new this.alertModel({ ...createAlertDto, coin });
    await newAlert.save();

    return plainToInstance(AlertDto, {
      ...newAlert.toObject(),
      id: newAlert._id.toString(),
    });
  }

  async validateAlert(alertId: string): Promise<AlertDto> {
    const alert = await this.alertModel.findById(alertId);
    if (!alert) {
      throw new NotFoundException(`Alert ${alertId} not found.`);
    }

    const coin = await this.coinrankingHttpService.getCoin(alert.uuid);
    if (!coin) {
      throw new NotFoundException(`Coin ${alert.uuid} not found.`);
    }

    alert.coin = coin;
    alert.execution = 'manual';
    alert.executedAt = new Date();
    if (
      (alert.type === 'up' && Number(coin.price) > alert.amount) ||
      (alert.type === 'down' && Number(coin.price) < alert.amount)
    ) {
      alert.status = 'success';
    } else {
      alert.status = 'fail';
    }
    await alert.save();
    return plainToInstance(AlertDto, {
      ...alert.toObject(),
      id: alert._id.toString(),
      coin,
    });
  }

  async validateAlerts(alertIds: string[]): Promise<AlertDto[]> {
    try {
      const results = await Promise.allSettled(
        alertIds.map((alertId) => this.validateAlert(alertId)),
      );
      return plainToInstance(
        AlertDto,
        results.map((result) => {
          if (result.status === 'fulfilled') {
            return result.value;
          }
          return { message: result.reason.message };
        }),
      );
    } catch (error) {
      if (error.name === 'CastError') {
        throw new BadRequestException('Invalid id was passed.');
      }

      if (error.name === 'NotFoundException') {
        throw new NotFoundException(error.message);
      }

      throw new InternalServerErrorException('Something went really wrong.');
    }
  }
}
