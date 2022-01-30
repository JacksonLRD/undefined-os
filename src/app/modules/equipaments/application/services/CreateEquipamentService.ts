import { Inject, Service } from 'typedi';
import IEquipamentDTO from '../../dtos/IEquipamentDTO';
import equipamentFactory from '../../factory/equipamentFactory';
import IEquipamentRepository from '../../interfaces/repositories/IEquipamentRepository';
import ICreateEquipamentService from '../../interfaces/services/ICreateEquipamentService';
import IEquipament from '../../interfaces/typeorm/IEquipament';

@Service('CreateEquipamentService')
export default class CreateEquipamentService implements ICreateEquipamentService {
  constructor(
    @Inject('EquipamentRepository') private equipamentRepository: IEquipamentRepository
  ) {}

  public async execute(data: IEquipamentDTO): Promise<IEquipament> {
    const equipament = equipamentFactory(data);
    return this.equipamentRepository.save(equipament);
  }
}
