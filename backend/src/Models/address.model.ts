import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { AddressToTypeCodeModel } from './addressToTypeCode.model';

@Entity('tb_address')
export class AddressModel {
  @PrimaryGeneratedColumn('uuid')
  addressID: string;

  @Column()
  city: string;

  @Column()
  houseNumber: number;

  @Column()
  state: string;

  @Column()
  cep: string;

  @ManyToMany(
    () => AddressToTypeCodeModel,
    (addressType) => addressType.address,
  )
  addressTypeCode: string;
}
