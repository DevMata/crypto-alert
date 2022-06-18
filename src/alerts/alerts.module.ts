import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Alert, AlertSchema } from './database/alert.schema';
import { AlertsService } from './services/alerts.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alert.name, schema: AlertSchema }]),
  ],
  providers: [AlertsService],
})
export class AlertsModule {}
