import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaOptions, Types } from 'mongoose';
import { Board } from 'src/boards/board.schema';

export type UserDocument = HydratedDocument<User>;
const options: SchemaOptions = {
  collection: 'users',
};

@Schema(options)
export class User {
  _id: string;

  @Prop({ unique: true })
  id: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  // Board 클래스 참조
  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Board' }],
  })
  boards: Board[];
}

export const UserSchema = SchemaFactory.createForClass(User);
