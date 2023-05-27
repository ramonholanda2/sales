import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressModel } from './address.model';

@Entity('tb_store')
export class StoreModel {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({
    nullable: false,
    length: 150,
  })
  name: string;
  @OneToMany(() => AddressModel, (address) => address.associationID)
  address: AddressModel[];
}
