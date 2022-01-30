import IEquipamentDTO from '../../dtos/IEquipamentDTO';
import IEquipament from '../typeorm/IEquipament';

export default interface ICreateEquipamentOperation {
  execute(data: IEquipamentDTO): Promise<IEquipament>;
}
