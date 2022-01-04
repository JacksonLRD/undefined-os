import { StatusServiceOrder } from "../@types/enums/StatusServiceOrder";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { ProductServiceOrder } from "./ProductServiceOrderEntity";
import { Person } from "./PersonEntity";
import { EquipamentServiceOrder } from "./EquipamentServiceOrderEntity";
import { ServiceServiceOrder } from "./ServiceServiceOrderEntity";

@Entity()
export class ServiceOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: StatusServiceOrder })
  status: StatusServiceOrder;

  @Column({ nullable: true })
  repairNumber: string;

  @Column({ type: "datetime" })
  createdAt: Date;

  @Column({ type: "datetime", nullable: true })
  concludedAt: Date;

  @OneToMany(
    () => ProductServiceOrder,
    productServiceOrder => productServiceOrder.serviceOrder
  )
  productServiceOrders: ProductServiceOrder[];

  @OneToMany(
    () => EquipamentServiceOrder,
    equipamentServiceOrder => equipamentServiceOrder.serviceOrder
  )
  equipamentServiceOrders: EquipamentServiceOrder[];

  @OneToMany(
    () => ServiceServiceOrder,
    serviceServiceOrder => serviceServiceOrder.serviceOrder
  )
  serviceServiceOrders: ServiceServiceOrder[];

  @ManyToMany(() => Person)
  @JoinTable()
  persons: Person[];
}
