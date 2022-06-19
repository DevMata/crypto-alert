import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Alert, AlertSchema } from './database/alert.schema';
import { AlertsService } from './services/alerts.service';
import { AlertsController } from './controllers/alerts.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Alert.name, schema: AlertSchema }]),
  ],
  providers: [AlertsService],
  controllers: [AlertsController],
})
export class AlertsModule {}
