import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Equipament } from "./EquipamentEntity";
import { ServiceOrder } from "./ServiceOrderEntity";

@Entity()
export class EquipamentServiceOrder {
  @PrimaryGeneratedColumn()
  equipamentServiceOrderId: number;

  @Column()
  equipamentId: number;

  @Column()
  serviceOrderId: number;

  @Column()
  serieNumber: string;

  @Column()
  warranty: boolean;

  @Column()
  presentDefect: string;

  @Column()
  observation: string;

  @Column()
  solution: string;

  @ManyToOne(
    () => Equipament, equipament => equipament.equipamentServiceOrders
  )
  equipament: Equipament;

  @ManyToOne(
    () => ServiceOrder, serviceOrder => serviceOrder.equipamentServiceOrders
  )
  serviceOrder: ServiceOrder;
}
