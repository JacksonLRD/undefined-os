import { Inject, Service } from 'typedi';
import IEquipamentDTO from '../../dtos/IEquipamentDTO';
import ICreateEquipamentService from '../../interfaces/services/ICreateEquipamentService';
import IEquipament from '../../interfaces/typeorm/IEquipament';

@Service('CreateEquipamentOperation')
export default class CreateEquipamentOperation implements ICreateEquipamentService {
  constructor(
    @Inject('CreateEquipamentService') private createEquipamentService: ICreateEquipamentService
  ) {}

  public async execute(data: IEquipamentDTO): Promise<IEquipament> {
    try {
      return this.createEquipamentService.execute(data);
    } catch (error) {
      if (error instanceof Error) throw error.message;
      throw new Error('Algo de errado não está certo');
    }
  }
}
