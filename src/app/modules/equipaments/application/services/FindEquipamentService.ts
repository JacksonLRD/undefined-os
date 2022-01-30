import { Inject, Service } from 'typedi';
import IEquipamentRepository from '../../interfaces/repositories/IEquipamentRepository';
import IFindEquipamentService from '../../interfaces/services/IFindEquipamentService';
import IEquipament from '../../interfaces/typeorm/IEquipament';

@Service('FindEquipamentService')
export default class FindEquipamentService implements IFindEquipamentService {
  constructor(
    @Inject('EquipamentRepository') private equipamentRepository: IEquipamentRepository
  ) {}

  public async findById(id: string): Promise<IEquipament> {
    const equipament = await this.equipamentRepository.findById(id);
    if (!equipament) throw new Error('Equipament Not Found');
    return equipament;
  }

  public async findByName(name: string): Promise<IEquipament> {
    const equipament = await this.equipamentRepository.findByName(name);
    if (!equipament) throw new Error('Equipament Not Found');
    return equipament;
  }

  public async findBySerieNumber(serieNumber: string): Promise<IEquipament> {
    const equipament = await this.equipamentRepository.findBySerieNumber(serieNumber);
    if (!equipament) throw new Error('Equipament Not Found');
    return equipament;
  }

  public async findAll(): Promise<IEquipament[]> {
    const equipaments = await this.equipamentRepository.findAll();
    if (!equipaments) throw new Error('Equipaments Not Found');
    return equipaments;
  }
}
