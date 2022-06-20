import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlertDto } from '../dtos/response/alert.dto';
import { CreateAlertDto } from '../dtos/request/create-alert.dto';
import { AlertsService } from '../services/alerts.service';
import { AlertIdParamDto } from '../dtos/request/alert-id-param.dto';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get()
  async getAlerts(): Promise<AlertDto[]> {
    return this.alertsService.getAlerts();
  }

  @Get('/validated')
  async getValidatedAlerts(): Promise<AlertDto[]> {
    return this.alertsService.getValidatedAlerts();
  }

  @Post()
  async createAlert(@Body() createAlertDto: CreateAlertDto): Promise<AlertDto> {
    return this.alertsService.createAlert(createAlertDto);
  }

  @Post('/:alertId/validation')
  async validateAlert(@Param() paramDto: AlertIdParamDto): Promise<AlertDto> {
    return this.alertsService.validateAlert(paramDto.alertId);
  }
}
