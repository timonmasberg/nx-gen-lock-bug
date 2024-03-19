import { Module } from '@nestjs/common';
import * as z from '@nestjs/apollo';
import * as y from "jsonwebtoken"
import * as x from "mongoose"
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
