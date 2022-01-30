import { Inject, Service } from 'typedi';
import IEquipamentRepository from '../../interfaces/repositories/IEquipamentRepository';
import IRemoveEquipamentService from '../../interfaces/services/IRemoveEquipamentService';

@Service('RemoveEquipamentService')
export default class RemoveEquipamentService implements IRemoveEquipamentService {
  constructor(
    @Inject('EquipamentRepository') private equipamentRepository: IEquipamentRepository
  ) {}

  public async execute(id: string): Promise<boolean> {
    const equipament = await this.equipamentRepository.findById(id);
    if (!equipament) throw new Error('Equipament Not Found');
    await this.equipamentRepository.remove(equipament);
    return true;
  }
}
