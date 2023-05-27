import { Injectable } from '@nestjs/common';
import CreateTypeAssociationsI from 'src/interfaces/createTypeAssociations';
import { Database } from '../DB/database';
import { toModelTypeAssociation } from 'src/Serializable/toModelTypeAssociation';
import { TypeAssociation } from 'src/Models/TypeCode.model';

@Injectable()
export class AssociationTypeService {
  constructor(private readonly database: Database) {}

  async createTypeAssociation(
    associationstypes: CreateTypeAssociationsI,
  ): Promise<CreateTypeAssociationsI> {
    const { AppDataSource } = this.database;
    associationstypes.typeAssociations.forEach(async (associationType) => {
      const repository = AppDataSource.getRepository(TypeAssociation);
      const countTypeCode = await repository.count({
        where: { typeCode: associationType.typeCode },
      });
      if (countTypeCode === 0) {
        const association = toModelTypeAssociation(associationType);
        await AppDataSource.manager.save(association);
      }
    });

    return associationstypes;
  }
}
