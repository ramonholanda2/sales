import { instanceToPlain, plainToClass } from 'class-transformer';
import { TypeAssociationModel } from 'src/Models/TypeCode.model';
import AssociationTypeI from 'src/interfaces/associationAddressTypes.interface';

export function toModelTypeAssociation(dto: AssociationTypeI) {
  const data = instanceToPlain(dto);
  return plainToClass(TypeAssociationModel, data);
}
