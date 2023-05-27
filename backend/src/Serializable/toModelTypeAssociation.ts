import { instanceToPlain, plainToClass } from 'class-transformer';
import { TypeAssociation } from 'src/Models/TypeCode.model';
import AssociationTypeI from 'src/interfaces/associationAddressTypes.interface';

export function toModelTypeAssociation(dto: AssociationTypeI) {
  const data = instanceToPlain(dto);
  return plainToClass(TypeAssociation, data);
}
