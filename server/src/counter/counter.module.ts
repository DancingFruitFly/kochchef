import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Counter, CounterSchema } from './schemas/counter.schema';
import { CounterController } from './counter.controller';
import { CounterService } from './counter.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Counter.name, schema: CounterSchema }]),
  ],
  controllers: [CounterController],
  providers: [CounterService],
})
export class CounterModule {}
