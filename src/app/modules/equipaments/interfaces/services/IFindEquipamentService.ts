import IEquipament from '../typeorm/IEquipament';

export default interface IFindEquipamentService {
  findById(id: string): Promise<IEquipament>;
  findByName(name: string): Promise<IEquipament>;
  findBySerieNumber(serieNumber: string): Promise<IEquipament>;
  findAll(): Promise<IEquipament[]>;
}
