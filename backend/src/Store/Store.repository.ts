import { Injectable } from '@nestjs/common';
import { Database } from 'src/DB/database';

@Injectable()
export class StoreRepository {
  constructor(private readonly database: Database) {}

  createStore(store: any) {
    const { AppDataSource } = this.database;
  }
}
