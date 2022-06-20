import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AlertDto } from '../dtos/response/alert.dto';
import { CreateAlertDto } from '../dtos/request/create-alert.dto';
import { AlertsQueryDto } from '../dtos/request/alerts-query.dto';
import { AlertsService } from '../services/alerts.service';
import { AlertIdParamDto } from '../dtos/request/alert-id-param.dto';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get()
  async getAlerts(@Query() alertsQuery: AlertsQueryDto): Promise<any> {
    console.log(alertsQuery);
    return [];
  }

  @Get('/validated')
  async getValidatedAlerts(): Promise<any> {
    return [];
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
