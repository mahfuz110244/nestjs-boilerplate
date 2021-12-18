import { Module } from '@nestjs/common';
import { Pokemon } from './pokemon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [PokemonService],
})
export class PokemonModule {}

