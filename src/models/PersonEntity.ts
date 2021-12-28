import { PersonsRole } from "../@types/enums/PersonsRole";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Company } from "./CompanyEntity";

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 20 })
  cpfCnpj?: string;

  @Column({ length: 20 })
  telephoneOne: string;

  @Column({ length: 20 })
  telephoneTwo?: string;

  @Column({ length: 40 })
  email?: string;

  @Column({ length: 10 })
  postcode?: string;

  @Column({ length: 100 })
  adress?: string;

  @Column({ length: 10 })
  adressNumber?: string;

  @Column({ length: 50 })
  district?: string;

  @Column({ length: 50 })
  city?: string;

  @Column({ length: 50 })
  state?: string;

  @Column({ length: 15 })
  role: PersonsRole;

  @ManyToOne(() => Company, company => company.persons)
  company: Company;
}
