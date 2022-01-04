import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Service } from "./ServiceEntity";
import { ServiceOrder } from "./ServiceOrderEntity";

@Entity()
export class ServiceServiceOrder {
  @PrimaryGeneratedColumn()
  serviceServiceOrderId: number;

  @Column()
  serviceId: number;

  @Column()
  serviceOrderId: number;

  @Column({ type: "float" })
  price: number;

  @ManyToOne(
    () => Service, service => service.serviceServiceOrders
  )
  service: Service;

  @ManyToOne(
    () => ServiceOrder, serviceOrder => serviceOrder.serviceServiceOrders
  )
  serviceOrder: ServiceOrder;
}
