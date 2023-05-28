import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressToTypeCodeModel } from './addressToTypeCode.model';

@Entity('tb_typeAssociation')
export class TypeAssociationModel {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column()
  typeCode: string;

  @ManyToMany(
    () => AddressToTypeCodeModel,
    (addressTypeCode) => addressTypeCode.typeCode,
  )
  addressTypeCode: string;
}
