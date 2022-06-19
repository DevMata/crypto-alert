import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Alert, AlertDocument } from '../database/alert.schema';
import { Model } from 'mongoose';
import { plainToInstance } from 'class-transformer';
import { CreateAlertDto } from '../dtos/request/create-alert.dto';
import { AlertDto } from '../dtos/response/alert.dto';
import { AlertsQueryDto } from '../dtos/request/alerts-query.dto';

@Injectable()
export class AlertsService {
  constructor(
    @InjectModel(Alert.name) private readonly alertModel: Model<AlertDocument>,
  ) {}

  async getAlerts(alertsQuery: AlertsQueryDto): Promise<AlertDto[]> {
    return [];
  }

  async GetValidatedAlerts(): Promise<AlertDto[]> {
    return [];
  }

  async createAlert(createAlertDto: CreateAlertDto): Promise<AlertDto> {
    const newAlert = new this.alertModel({ ...createAlertDto });
    await newAlert.save();

    return plainToInstance(AlertDto, newAlert);
  }

  async validateAlert(alertId: string): Promise<AlertDto> {
    return null;
  }
}
