import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Equipament {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 150 })
  name!: string;

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
