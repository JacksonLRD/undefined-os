import { StatusServiceOrder } from "../@types/enums/StatusServiceOrder";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductServiceOrder } from "./ProductServiceOrderEntity";

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
}
