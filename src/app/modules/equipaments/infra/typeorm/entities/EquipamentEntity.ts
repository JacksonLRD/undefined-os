import { Column, Entity } from 'typeorm';
import BaseEntity from '../../../../../shared/infra/typeorm/entity/BaseEntity';

@Entity()
export default class Equipament extends BaseEntity {
  @Column({ nullable: true })
  manufacturer!: string;

  @Column({ nullable: true })
  type!: string;

  @Column({ nullable: true })
  serieNumber!: string;

  @Column()
  warranty!: boolean;

  @Column({ nullable: true })
  presentDefect!: string;

  @Column({ nullable: true })
  observation!: string;

  @Column({ nullable: true })
  solution!: string;

  @Column({ nullable: true })
  repairNumber!: string;

  @Column('simple-array', { nullable: true })
  images!: string[];
}
