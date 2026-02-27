import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CounterModule } from './counter/counter.module';
import { join } from 'path';
import { RecipeModule } from './recipe/module/recipe/recipe.module';

@Module({
  imports: [
    CounterModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    RecipeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
