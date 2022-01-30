export default interface IEquipament {
  id?: string;
  name: string;
  manufacturer?: string;
  type?: string;
  serieNumber?: string;
  warranty: boolean | false;
  presentDefect?: string;
  observation?: string;
  solution?: string;
  repairNumber?: string;
  images?: string[];
}
