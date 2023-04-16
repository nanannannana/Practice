import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongodbConfig from './configs/mongodb.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [mongodbConfig],
    }),
    BoardsModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configservice: ConfigService) => ({
        uri: configservice.get<string>('mongodb.uri'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
  ],
})
export class AppModule {}
