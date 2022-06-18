import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { AlertType } from '../types/alert-type.enum';

export type AlertDocument = Alert & Document;

@Schema({ timestamps: true })
export class Alert {
  @Prop({ type: Types.ObjectId })
  id: string;

  @Prop()
  uuid: string;

  @Prop({ enum: AlertType })
  type: string;

  @Prop()
  amount: number;
}

export const AlertSchema = SchemaFactory.createForClass(Alert);
