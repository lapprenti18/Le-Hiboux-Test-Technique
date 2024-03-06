import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { QueueModule } from 'src/queues/module';

@Module({
  imports: [TypeOrmModule.forFeature([Card]), QueueModule],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
