import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonsModule } from './pokemons/pokemons.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URL ||
        'mongodb+srv://admin:123@bombom.dwqmla2.mongodb.net/?retryWrites=true&w=majority&appName=bombom',
    ),
    PokemonsModule,
  ],
})
export class AppModule {}
