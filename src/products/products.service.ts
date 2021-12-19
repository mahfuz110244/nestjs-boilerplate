import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOptions } from 'src/utils/types/find-options.type';
import { DeepPartial } from 'src/utils/types/deep-partial.type';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService extends TypeOrmCrudService<Product> {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {
    super(productsRepository);
  }

  async findOneEntity(options: FindOptions<Product>) {
    return this.productsRepository.findOne({
      where: options.where,
    });
  }

  async findManyEntities(options: FindOptions<Product>) {
    return this.productsRepository.find({
      where: options.where,
    });
  }

  async saveEntity(data: DeepPartial<Product>) {
    return this.productsRepository.save(this.productsRepository.create(data));
  }

  async softDelete(id: number): Promise<void> {
    await this.productsRepository.softDelete(id);
  }

  async productCreate(dto: ProductDto): Promise<void> {
    const product = await this.productsRepository.saveEntity({
      ...dto,
      name: dto.name,
      description: dto.description
    });
  }

  async productUpdate(id: number, dto: ProductDto): Promise<void> {
    const product = this.productsRepository.find({
      where: id,
    });
    await this.saveEntity({
      ...dto,
      name: dto.name,
      description: dto.description
    });
  }
}