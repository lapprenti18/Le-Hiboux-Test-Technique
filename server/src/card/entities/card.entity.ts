import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum StatusEnum {
  TODO = '1',
  DOING = '2',
  DONE = '3',
}

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.TODO})
  status: string;

}
