export default interface IRemoveEquipamentService {
  execute(id: string): Promise<boolean>;
}
