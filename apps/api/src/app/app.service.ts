import { Injectable } from '@nestjs/common';
import { Message } from '@open-mob-timer-v2/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
