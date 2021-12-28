import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  manufacturer: string;

  @Column({ type: "float" })
  price: string;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  criticalQuantity: number;
}
