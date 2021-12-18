import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Pokemon } from './pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOptions } from 'src/utils/types/find-options.type';
import { DeepPartial } from 'src/utils/types/deep-partial.type';

@Injectable()
export class PokemonService extends TypeOrmCrudService<Pokemon> {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {
    super(pokemonRepository);
  }

  async findOneEntity(options: FindOptions<Pokemon>) {
    return this.pokemonRepository.findOne({
      where: options.where,
    });
  }

  async findManyEntities(options: FindOptions<Pokemon>) {
    return this.pokemonRepository.find({
      where: options.where,
    });
  }

  async saveEntity(data: DeepPartial<Pokemon>) {
    return this.pokemonRepository.save(this.pokemonRepository.create(data));
  }

  async softDelete(id: number): Promise<void> {
    await this.pokemonRepository.softDelete(id);
  }
}
