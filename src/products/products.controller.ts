import { Controller, Request, UseGuards } from '@nestjs/common';
import { Crud, CrudController, Override } from '@nestjsx/crud';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { RolesGuard } from '../roles/roles.guard';
import validationOptions from 'src/utils/validation-options';

@ApiBearerAuth()
@Roles(RoleEnum.admin)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('Products')
@Crud({
  validation: validationOptions,
  model: {
    type: Product,
  },
  query: {
    maxLimit: 50,
    alwaysPaginate: false
  },
})
@Controller({
  path: 'products',
  version: '1',
})
export class ProductsController implements CrudController<Product> {
  constructor(public service: ProductsService) {}

  get base(): CrudController<Product> {
    return this;
  }

  @Override()
  async deleteOne(@Request() request) {
    return this.service.softDelete(request.params.id);
  }
}
