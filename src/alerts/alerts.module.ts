import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Alert, AlertSchema } from './database/alert.schema';
import { AlertsService } from './services/alerts.service';
import { AlertsController } from './controllers/alerts.controller';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alert.name, schema: AlertSchema }]),
    CommonModule,
  ],
  providers: [AlertsService],
  controllers: [AlertsController],
})
export class AlertsModule {}
