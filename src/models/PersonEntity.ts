import { PersonsRole } from "../@types/enums/PersonsRole";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Company } from "./CompanyEntity";

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 20, nullable: true })
  cpfCnpj?: string;

  @Column({ length: 20 })
  telephoneOne: string;

  @Column({ length: 20, nullable: true })
  telephoneTwo?: string;

  @Column({ length: 40, nullable: true })
  email?: string;

  @Column({ length: 10, nullable: true })
  postcode?: string;

  @Column({ length: 100, nullable: true })
  adress?: string;

  @Column({ length: 10, nullable: true })
  adressNumber?: string;

  @Column({ length: 50, nullable: true })
  district?: string;

  @Column({ length: 50, nullable: true })
  city?: string;

  @Column({ length: 50, nullable: true })
  state?: string;

  @Column({
    type: "enum",
    enum: PersonsRole,
    length: 15
  })
  role: PersonsRole;

  @ManyToOne(() => Company, company => company.persons)
  company: Company;
}
