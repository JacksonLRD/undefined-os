import IServiceOrderDTO from '../../serviceOrders/dtos/IServiceOrderDTO';
import PersonsRole from '../enums/PersonsRole';

export default interface IPersonDTO {
  id?: string;
  name: string;
  cpfCnpj?: string;
  telephoneOne: string;
  telephoneTwo?: string;
  email?: string;
  postcode?: string;
  adress?: string;
  adressNumber?: string;
  district?: string;
  city?: string;
  state?: string;
  role: PersonsRole | PersonsRole.client;
  serviceOrder?: IServiceOrderDTO;
}
