import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BoardStatus } from './board-status.enum';
import { HydratedDocument, SchemaOptions, Types } from 'mongoose';
import { User } from 'src/auth/user.schema';

export type BoardDocument = HydratedDocument<Board>;
// id unique값 부여
const options: SchemaOptions = {
  collection: 'boards',
};

@Schema(options)
export class Board {
  _id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  status: BoardStatus;

  // User 클래스 참조
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
  })
  user: User;
}

// Board 클래스를 Mongoose에서 사용할 수 있는 스키마로 컴파일
export const BoardSchema = SchemaFactory.createForClass(Board);
