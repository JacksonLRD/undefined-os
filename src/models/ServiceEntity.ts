import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ServiceServiceOrder } from "./ServiceServiceOrderEntity";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "float" })
  price: number;

  @OneToMany(
    () => ServiceServiceOrder,
    serviceServiceOrder => serviceServiceOrder.service
  )
  serviceServiceOrders: ServiceServiceOrder[];
}
