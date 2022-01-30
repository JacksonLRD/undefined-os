import Container from 'typedi';
import { getCustomRepository } from 'typeorm';
import EquipamentRepository from '../../modules/equipaments/infra/typeorm/repositories/EquipamentRepository';

// inicializador de dependências injetáveis:
// inicializa controllers

// inicializa operations

// inicializa services
import '../../modules/equipaments/application/services/CreateEquipamentService';
import '../../modules/equipaments/application/services/FindEquipamentService';
import '../../modules/equipaments/application/services/RemoveEquipamentService';

const createDependencyInjector = () => {
  Container.set('EquipamentRepository', getCustomRepository(EquipamentRepository));
};

export default createDependencyInjector;
