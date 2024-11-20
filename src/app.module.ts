import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
