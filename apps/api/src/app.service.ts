import { Injectable } from '@nestjs/common'
import { add } from '@parking-app/sample-lib'

@Injectable()
export class AppService {
  let a : string;
  a = 1;
  getHello(): string {
    return 'Hello World! ' + add(34, 3)
  }
}
