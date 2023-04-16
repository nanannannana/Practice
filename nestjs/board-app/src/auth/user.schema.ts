import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaOptions } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
const options: SchemaOptions = {
  collection: 'users',
  _id: true,
};

@Schema(options)
export class User {
  @Prop({ unique: true })
  id: string;

  @Prop()
  username: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
