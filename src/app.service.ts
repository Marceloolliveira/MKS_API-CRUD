import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'MKS Api CRUD MKS-desenvolvimento-de-sistemas Version 1.0';
  }
}
