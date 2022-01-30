import IEquipamentDTO from '../../equipaments/dtos/IEquipamentDTO';
import IPersonDTO from '../../persons/dtos/IPersonDTO';
import StatusServiceOrder from '../enums/StatusServiceOrder';

export default interface IServiceOrderDTO {
  id?: string;
  serviceOrderNumber?: number;
  status: StatusServiceOrder | StatusServiceOrder.awaitingApproval;
  createdAt?: Date;
  concludedAt?: Date;
  serviceName?: string;
  pervicePrice?: number;
  productName?: string;
  productPrice?: number;
  productQuantity?: number;
  client: IPersonDTO;
  technician?: IPersonDTO;
  equipament?: IEquipamentDTO;
}
