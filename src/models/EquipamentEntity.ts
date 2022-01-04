import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EquipamentServiceOrder } from "./EquipamentServiceOrderEntity";

@Entity()
export class Equipament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  manufacturer: string;

  @Column()
  type: string;

  @OneToMany(
    () => EquipamentServiceOrder,
    equipamentServiceOrder => equipamentServiceOrder.equipament
  )
  equipamentServiceOrders: EquipamentServiceOrder[];
}
