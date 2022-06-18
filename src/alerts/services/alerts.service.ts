import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Alert, AlertDocument } from '../database/alert.schema';
import { Model } from 'mongoose';

@Injectable()
export class AlertsService {
  constructor(
    @InjectModel(Alert.name) private readonly alertModel: Model<AlertDocument>,
  ) {}
}
