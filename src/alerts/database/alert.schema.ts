import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AlertType } from '../types/alert-type.enum';

export type AlertDocument = Alert & Document;

@Schema({ timestamps: true })
export class Alert {
  @Prop()
  uuid: string;

  @Prop({ enum: AlertType })
  type: string;

  @Prop()
  amount: number;

  @Prop()
  status: string;

  @Prop()
  execution: string;

  @Prop()
  executedAt?: Date;
}

export const AlertSchema = SchemaFactory.createForClass(Alert);
