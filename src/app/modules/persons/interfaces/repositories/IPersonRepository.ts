import IPersonDTO from '../../dtos/IPersonDTO';
import Person from '../../infra/typeorm/entities/PersonEntity';

export default interface IPersonRepository {
  save(data: IPersonDTO): Promise<Person>;
  findById(id: string): Promise<Person | undefined>;
  findByRole(role: string): Promise<Person | undefined>;
  findAll(): Promise<Person[]>;
  remove(data: IPersonDTO): Promise<Person>;
}
