import IEquipamentDTO from '../../dtos/IEquipamentDTO';
import IEquipament from '../typeorm/IEquipament';

export default interface ICreateEquipamentService {
  execute(data: IEquipamentDTO): Promise<IEquipament>;
}
