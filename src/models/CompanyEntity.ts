import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Person } from "./PersonEntity";

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 20 })
  cnpj: string;

  @Column({ length: 20 })
  telephone: string;

  @Column({ length: 40 })
  email: string;

  @Column({ length: 10 })
  postcode: string;

  @Column({ length: 100 })
  adress: string;

  @Column({ length: 10 })
  adressNumber: string;

  @Column({ length: 50 })
  district: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  state: string;

  @OneToMany(() => Person, person => person.company)
  persons: Person[];
}
