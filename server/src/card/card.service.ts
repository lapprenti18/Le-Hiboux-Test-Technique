import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: Repository<Card>,
  ) {}

  create(createCardDto: CreateCardDto): Promise<Card> {
    const card = new Card();
    card.title = createCardDto.title;
    card.description = createCardDto.description;
    return this.cardRepository.save(card);

  }

  findAll() {
    return this.cardRepository.find();
  }

  async findOne(id: number) {
    const user = await this.cardRepository.findOne({where: {id}});
    if (!user) throw new NotFoundException('Could not find the card.');
    return user;
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    const card = await this.findOne(id);
    card.title = updateCardDto.title || card.title;
    card.description = updateCardDto.description || card.description;
    return this.cardRepository.save(card);
  }

  remove(id: number) {
    return this.cardRepository.delete(id);
  }
}
