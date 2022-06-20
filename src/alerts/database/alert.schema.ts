import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
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

  @Prop({ default: null })
  status: string;

  @Prop({ default: 'task' })
  execution: string;

  @Prop({ default: null })
  executedAt?: Date;

  @Prop(
    raw({
      uuid: { type: String },
      symbol: { type: String },
      name: { type: String },
      color: { type: String },
      iconUrl: { type: String },
      marketCap: { type: String },
      price: { type: String },
      btcPrice: { type: String },
      listedAt: { type: Date },
      change: { type: String },
    }),
  )
  coin: Record<string, any>;
}

export const AlertSchema = SchemaFactory.createForClass(Alert);
