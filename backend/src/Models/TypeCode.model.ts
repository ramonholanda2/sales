import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_typeAssociation')
export class TypeAssociation {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  typeCode: string;
}
