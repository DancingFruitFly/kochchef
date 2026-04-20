import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RecipeModule } from './recipe/recipe.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RatingModule } from './rating/rating.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    RecipeModule,
    CommentModule,
    UserModule,
    AuthModule,
    RatingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
