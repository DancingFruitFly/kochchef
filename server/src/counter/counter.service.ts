import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Counter } from 'src/schemas/counter.schema';

@Injectable()
export class CounterService {
  constructor(@InjectModel(Counter.name) private counterModel: Model<Counter>) {
    this.counterModel
      .findOne()
      .then((counter) => {
        if (!counter) {
          this.counterModel.create({ count: 0 }).catch(console.error);
        }
      })
      .catch(console.error);
  }

  async get(): Promise<number> {
    const counter = await this.counterModel.findOne().exec();
    return counter?.count || 0;
  }

  async increment(): Promise<number> {
    const counter = await this.counterModel
      .findOneAndUpdate(
        {},
        {
          $inc: {
            count: 1,
          },
        },
        {
          new: true,
        },
      )
      .exec();
    return counter?.count || 0;
  }

  async decrement(): Promise<number> {
    const counter = await this.counterModel
      .findOneAndUpdate(
        {},
        {
          $inc: {
            count: -1,
          },
        },
        {
          new: true,
        },
      )
      .exec();
    return counter?.count || 0;
  }

  async reset(): Promise<number> {
    const counter = await this.counterModel
      .findOneAndUpdate(
        {},
        {
          $set: {
            count: 0,
          },
        },
        {
          new: true,
        },
      )
      .exec();
    return counter?.count || 0;
  }
}
