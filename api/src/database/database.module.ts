import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config as dotenv } from 'dotenv';
dotenv();

console.log({
  url: process.env.DATABASE_URL,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log(configService.get('DATABASE_URL'));

        return {
          // type: 'postgres',
          // url: configService.get('DATABASE_URL'),
          // host: configService.get('POSTGRES_HOST'),
          // port: configService.get('POSTGRES_PORT'),
          // username: configService.get('POSTGRES_USER'),
          // password: configService.get('POSTGRES_PASSWORD'),
          // database: configService.get('POSTGRES_DB'),
          // entities: [__dirname + '/../**/*.entity.js'],
          // synchronize: true,
          type: 'postgres',
          url: process.env.DATABASE_URL,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
