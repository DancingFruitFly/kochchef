import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CounterModule } from './counter/counter.module';
import { join } from 'path';

@Module({
  imports: [
    CounterModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI as string),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
