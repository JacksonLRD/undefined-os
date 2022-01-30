import { EntityRepository, Repository } from 'typeorm';
import IEquipamentRepository from '../../../../equipaments/interfaces/repositories/IEquipamentRepository';
import Equipament from '../entities/EquipamentEntity';

@EntityRepository(Equipament)
export default class EquipamentRepository
  extends Repository<Equipament>
  implements IEquipamentRepository
{
  public findById(id: string): Promise<Equipament | undefined> {
    return this.findOne({
      where: { id },
    });
  }

  public findByName(name: string): Promise<Equipament | undefined> {
    return this.findOne({
      where: { name },
    });
  }

  public findBySerieNumber(serieNumber: string): Promise<Equipament | undefined> {
    return this.findOne({
      where: { serieNumber },
    });
  }

  public findAll(): Promise<Equipament[]> {
    return this.find();
  }
}
