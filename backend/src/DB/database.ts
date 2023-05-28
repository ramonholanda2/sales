import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { AddressModel } from '../Models/address.model';
import { StoreModel } from '../Models/store.model';
import { Injectable } from '@nestjs/common';
import { TypeAssociationModel } from 'src/Models/TypeCode.model';
import { ConfigService } from '@nestjs/config';
import { AddressToTypeCodeModel } from 'src/Models/addressToTypeCode.model';
import { UserModel } from 'src/Models/user.model';

@Injectable()
export class Database {
  public AppDataSource: DataSource;

  constructor(private readonly config: ConfigService) {
    this.AppDataSource = new DataSource({
      type: 'postgres',
      host: this.config.get('DB_HOST'),
      port: this.config.get('DB_PORT'),
      username: this.config.get('DB_USERNAME'),
      password: this.config.get<string>('DB_PASSWORD'),
      database: this.config.get('DB_DATABASE'),
      entities: [
        TypeAssociationModel,
        AddressModel,
        StoreModel,
        AddressToTypeCodeModel,
        UserModel,
      ],
      synchronize: true,
      logging: true,
    });
    this.init();
  }

  public init() {
    this.AppDataSource.initialize().catch((error) => console.log(error));
  }
}
