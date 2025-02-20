import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/blogDB'),
    BlogModule, // Connect to the database
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
