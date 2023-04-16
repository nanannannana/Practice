import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BoardStatus } from './board-status.enum';
import { HydratedDocument, SchemaOptions } from 'mongoose';

export type BoardDocument = HydratedDocument<Board>;
// id unique값 부여
const options: SchemaOptions = {
  collection: 'boards',
  _id: true,
};

@Schema(options)
export class Board {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  status: BoardStatus;
}

// Board 클래스를 Mongoose에서 사용할 수 있는 스키마로 컴파일
export const BoardSchema = SchemaFactory.createForClass(Board);
