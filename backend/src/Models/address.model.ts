import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { TypeAssociation } from './TypeCode.model';

@Entity('tb_address')
export class AddressModel {
  @PrimaryGeneratedColumn('uuid')
  addressID: number;

  @Column()
  city: string;

  @Column()
  houseNumber: number;

  @Column()
  state: string;

  @Column()
  cep: string;

  @OneToOne(() => TypeAssociation)
  typeAssociation: TypeAssociation;

  @Column()
  associationID: number;
}
