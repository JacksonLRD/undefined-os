import { EntityRepository, Repository } from 'typeorm';
import IServiceOrderRepository from '../../../../serviceOrders/interfaces/repositories/IServiceOrderRepository';
import ServiceOrder from '../entities/ServiceOrderEntity';

@EntityRepository(ServiceOrder)
export default class ServiceOrderRepository
  extends Repository<ServiceOrder>
  implements IServiceOrderRepository
{
  public findById(id: string): Promise<ServiceOrder | undefined> {
    return this.findOne({
      relations: ['equipament', 'client', 'technician'],
      where: { id },
    });
  }

  public findByServiceOrderNumber(serviceOrderNumber: number): Promise<ServiceOrder | undefined> {
    return this.findOne({
      relations: ['equipament', 'client', 'technician'],
      where: { serviceOrderNumber },
    });
  }

  public findByEquipamentSerieNumber(serieNumber: string): Promise<ServiceOrder | undefined> {
    return this.findOne({
      relations: ['equipament', 'client', 'technician'],
      where: { serieNumber },
    });
  }

  public findAll(): Promise<ServiceOrder[]> {
    return this.find({ relations: ['equipament', 'client', 'technician'] });
  }
}
