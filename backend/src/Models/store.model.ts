import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_store')
export class StoreModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    nullable: false,
    length: 150,
  })
  name: string;
}
