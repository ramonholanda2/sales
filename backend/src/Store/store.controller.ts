import { Controller, HttpCode, Post } from '@nestjs/common';

@Controller('stores')
export class StoreController {
  @Post()
  @HttpCode(204)
  createStore(): string {
    return 'teste';
  }
}
