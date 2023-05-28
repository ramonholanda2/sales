import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TypeAssociationModel } from './TypeCode.model';
import { AddressModel } from './address.model';

@Entity('tb_addressToTypeCode')
export class AddressToTypeCodeModel {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({
    type: 'text',
    nullable: false,
  })
  associationId: string;

  @Column({
    nullable: false,
  })
  addressID: string;
  @Column({
    nullable: false,
  })
  typeCodeID: string;

  @ManyToMany(() => TypeAssociationModel, (association) => association.id)
  typeCode: TypeAssociationModel;
  @ManyToMany(() => AddressModel, (address) => address.addressID)
  address: AddressModel;
}
