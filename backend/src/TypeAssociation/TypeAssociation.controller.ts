import { Controller, HttpCode, Post, Body } from '@nestjs/common';
import { AssociationTypeService } from './TypeAssociation.service';
import CreateTypeAssociationsI from 'src/interfaces/createTypeAssociations';

@Controller('typeAssociation')
export class TypeAssociationController {
  constructor(
    private readonly typeAssociationService: AssociationTypeService,
  ) {}

  @Post()
  @HttpCode(201)
  async createStore(
    @Body() createTypeAssociation: CreateTypeAssociationsI,
  ): Promise<CreateTypeAssociationsI> {
    return await this.typeAssociationService.createTypeAssociation(
      createTypeAssociation,
    );
  }
}
