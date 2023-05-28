import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressToTypeCodeModel } from './addressToTypeCode.model';

@Entity('tb_user')
export class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({
    nullable: false,
    length: 150,
  })
  name: string;

  @Column({
    nullable: false,
    type: 'integer',
  })
  age: number;

  @ManyToMany(() => AddressToTypeCodeModel)
  addresses: AddressToTypeCodeModel[];
}
