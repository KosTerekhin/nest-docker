/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';
import { config as dotenv } from 'dotenv';
dotenv();
// import { ConfigModule } from '@nestjs/config';
// import * as Joi from '@hapi/joi';

@Module({
  imports: [PostsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
