import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductServiceOrder } from "./ProductServiceOrderEntity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column({ type: "float" })
  price: number;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  criticalQuantity: number;

  @OneToMany(
    () => ProductServiceOrder,
    productServiceOrder => productServiceOrder.product
  )
  productServiceOrders: ProductServiceOrder[];
}
