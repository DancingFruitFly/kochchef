import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CounterModule } from './counter/counter.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    CounterModule,
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => [
        {
          rootPath: (() => {
            const static_folder = configService.get<string>('STATIC_FOLDER');
            return static_folder
              ? join(__dirname, '..', static_folder)
              : join(__dirname, '..', 'public');
          })(),
          exclude: ['/api*wildcard'],
        },
      ],
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    RecipeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
