import { Injectable } from '@nestjs/common'
import { add } from '@parking-app/sample-lib'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ' + add(34, 3)
  }
}
