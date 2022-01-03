import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./ProductEntity";
import { ServiceOrder } from "./ServiceOrderEntity";

@Entity()
export class ProductServiceOrder {
  @PrimaryGeneratedColumn()
  productServiceOrderId: number;

  @Column()
  productId: number;

  @Column()
  serviceOrderId: number;

  @Column({ type: "float" })
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Product, product => product.productServiceOrders)
  product: Product;

  @ManyToOne(() => ServiceOrder, serviceOrder => serviceOrder.productServiceOrders)
  serviceOrder: ServiceOrder;
}
