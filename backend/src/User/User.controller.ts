import { Controller, HttpCode, Post, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  //constructor() {}

  @HttpCode(201)
  @Post()
  async createUser(@Body() body: any) {
    return { ok: true };
  }
}
