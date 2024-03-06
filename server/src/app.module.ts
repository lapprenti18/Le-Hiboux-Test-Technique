import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './card/card.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { MailModule } from './mail/mail.module';
import { QueueModule } from './queues/module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configuration().database.host,
      port: configuration().database.port,
      username: configuration().database.username,
      password: configuration().database.password,
      database: configuration().database.database,
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    QueueModule,
    CardModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
