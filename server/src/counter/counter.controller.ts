import { Controller, Delete, Get } from '@nestjs/common';
import { CounterService } from './counter.service';

@Controller({ version: '1', path: 'counter' })
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Get()
  get(): Promise<number> {
    return this.counterService.get();
  }

  @Get('/inc')
  increment(): Promise<number> {
    return this.counterService.increment();
  }

  @Get('/dec')
  decrement(): Promise<number> {
    return this.counterService.decrement();
  }

  @Delete()
  reset(): Promise<number> {
    return this.counterService.reset();
  }
}
