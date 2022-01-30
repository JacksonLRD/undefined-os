import IEquipamentDTO from '../dtos/IEquipamentDTO';
import Equipament from '../infra/typeorm/entities/EquipamentEntity';
import IEquipament from '../interfaces/typeorm/IEquipament';

const equipamentFactory = (data: IEquipamentDTO): IEquipament => {
  if (!data) throw new Error('Data Empty');
  const equipament = new Equipament();
  equipament.name = data.name;
  equipament.manufacturer = data.manufacturer as string;
  equipament.type = data.type as string;
  equipament.serieNumber = data.serieNumber as string;
  equipament.warranty = data.warranty;
  equipament.presentDefect = data.presentDefect as string;
  equipament.observation = data.observation as string;
  equipament.solution = data.solution as string;
  equipament.repairNumber = data.repairNumber as string;
  equipament.images = data.images as string[];

  return equipament;
};

export default equipamentFactory;
