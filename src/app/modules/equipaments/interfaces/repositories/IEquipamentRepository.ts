import IEquipamentDTO from '../../dtos/IEquipamentDTO';
import Equipament from '../../infra/typeorm/entities/EquipamentEntity';

export default interface IEquipamentRepository {
  save(data: IEquipamentDTO): Promise<Equipament>;
  findById(id: string): Promise<Equipament | undefined>;
  findByName(name: string): Promise<Equipament | undefined>;
  findBySerieNumber(serieNumber: string): Promise<Equipament | undefined>;
  findAll(): Promise<Equipament[]>;
  remove(data: IEquipamentDTO): Promise<Equipament>;
}
