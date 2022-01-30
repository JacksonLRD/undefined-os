import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Equipament from '../../../../equipaments/infra/typeorm/entities/EquipamentEntity';
import Person from '../../../../persons/infra/typeorm/entities/PersonEntity';
import StatusServiceOrder from '../../../enums/StatusServiceOrder';

@Entity()
export default class ServiceOrder {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  serviceOrderNumber!: number;

  @Column({ type: 'enum', enum: StatusServiceOrder })
  status!: StatusServiceOrder;

  @Column({ type: 'datetime' })
  createdAt!: Date;

  @Column({ type: 'datetime', nullable: true })
  concludedAt!: Date;

  @Column({ nullable: true })
  serviceName!: string;

  @Column({ type: 'float', nullable: true })
  pervicePrice!: number;

  @Column({ nullable: true })
  productName!: string;

  @Column({ type: 'float', nullable: true })
  productPrice!: number;

  @Column({ nullable: true })
  productQuantity!: number;

  @OneToOne(() => Person, (client) => client.serviceOrder)
  @JoinColumn()
  client!: Person;

  @OneToOne(() => Person)
  @JoinColumn()
  technician!: Person;

  @OneToOne(() => Equipament)
  @JoinColumn()
  equipament!: Equipament;
}
