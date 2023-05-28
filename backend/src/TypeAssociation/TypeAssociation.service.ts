import { Injectable, Logger } from '@nestjs/common';
import CreateTypeAssociationsI from 'src/interfaces/createTypeAssociations';
import { Database } from '../DB/database';
import { toModelTypeAssociation } from 'src/Serializable/toModelTypeAssociation';
import { TypeAssociationModel } from 'src/Models/TypeCode.model';

@Injectable()
export class AssociationTypeService {
  constructor(private readonly database: Database) {}

  async createTypeAssociation(
    associationstypes: CreateTypeAssociationsI,
  ): Promise<CreateTypeAssociationsI> {
    const { AppDataSource } = this.database;
    const logger = new Logger('AssociationType');
    associationstypes.typeAssociations.forEach(async (associationType) => {
      const repository = AppDataSource.getRepository(TypeAssociationModel);

      const countTypeCode = await repository.count({
        where: { typeCode: associationType.typeCode },
      });

      if (countTypeCode === 0) {
        const association = toModelTypeAssociation(associationType);
        await AppDataSource.manager.save(association);
        logger.log(
          `tipo de associação ${associationType.typeCode} criada com sucesso.`,
        );
      } else {
        logger.warn(
          `tipo de associação ${associationType.typeCode} já existe.`,
        );
      }
    });

    return associationstypes;
  }
}
