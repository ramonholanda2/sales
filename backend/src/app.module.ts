import { Logger, Module } from '@nestjs/common';
import { StoreController } from './Store/store.controller';
import { Database } from './DB/database';
import { TypeAssociationController } from './TypeAssociation/TypeAssociation.controller';
import { AssociationTypeService } from './TypeAssociation/TypeAssociation.service';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './User/User.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.development',
    }),
  ],
  controllers: [StoreController, TypeAssociationController, UserController],
  providers: [Database, AssociationTypeService],
})
export class AppModule {}
