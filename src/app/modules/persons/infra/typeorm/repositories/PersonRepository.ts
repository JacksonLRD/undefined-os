import { EntityRepository, Repository } from 'typeorm';
import IPersonRepository from '../../../../persons/interfaces/repositories/IPersonRepository';
import Person from '../entities/PersonEntity';

@EntityRepository(Person)
export default class PersonRepository extends Repository<Person> implements IPersonRepository {
  public async findById(id: string): Promise<Person | undefined> {
    return this.findOne({
      where: { id },
    });
  }

  public async findByRole(role: string): Promise<Person | undefined> {
    return this.findOne({
      where: { role },
    });
  }

  public async findAll(): Promise<Person[]> {
    return this.find();
  }
}
