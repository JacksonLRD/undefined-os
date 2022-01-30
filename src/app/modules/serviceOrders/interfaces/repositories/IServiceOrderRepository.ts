import IServiceOrderDTO from '../../dtos/IServiceOrderDTO';
import ServiceOrder from '../../infra/typeorm/entities/ServiceOrderEntity';

export default interface IServiceOderRepository {
  save(data: IServiceOrderDTO): Promise<ServiceOrder>;
  findById(id: string): Promise<ServiceOrder | undefined>;
  findByServiceOrderNumber(serviceOrderNumber: number): Promise<ServiceOrder | undefined>;
  findByEquipamentSerieNumber(serieNumber: string): Promise<ServiceOrder | undefined>;
  findAll(): Promise<ServiceOrder[]>;
  remove(data: IServiceOrderDTO): Promise<ServiceOrder>;
}
