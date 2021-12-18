import { Controller, Request, UseGuards } from '@nestjs/common';
import { Crud, CrudController, Override } from '@nestjsx/crud';
import { Pokemon } from './pokemon.entity';
import { PokemonService } from './pokemon.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { RolesGuard } from '../roles/roles.guard';
import validationOptions from 'src/utils/validation-options';

// @ApiBearerAuth()
// @Roles(RoleEnum.admin)
// @UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Pokemons')
@Crud({
  validation: validationOptions,
  model: {
    type: Pokemon,
  },
  query: {
    maxLimit: 50,
    alwaysPaginate: false,
    join: {
      role: {
        eager: false,
      },
      status: {
        eager: false,
      },
      photo: {
        eager: false,
      },
    },
  },
})
@Controller({
  path: 'pokemon',
  version: '1',
})
export class PokemonController implements CrudController<Pokemon> {
  constructor(public service: PokemonService) {}

  get base(): CrudController<Pokemon> {
    return this;
  }

  @Override()
  async deleteOne(@Request() request) {
    return this.service.softDelete(request.params.id);
  }
}
