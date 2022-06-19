import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlertDto } from '../dtos/response/alert.dto';
import { CreateAlertDto } from '../dtos/request/create-alert.dto';

@Controller('alerts')
export class AlertsController {
  @Get()
  async getAlerts(): Promise<any> {
    return [];
  }

  @Get('/validated')
  async getValidatedAlerts(): Promise<any> {
    return [];
  }

  @Post()
  async createAlert(@Body() createAlertDto: CreateAlertDto): Promise<AlertDto> {
    return Promise.resolve({
      id: 'abc',
      amount: createAlertDto.amount,
      type: createAlertDto.type,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  @Post('/:alertId/validation')
  async validateAlert(@Param('alertId') alertId: string): Promise<any> {
    return { alertId };
  }
}
