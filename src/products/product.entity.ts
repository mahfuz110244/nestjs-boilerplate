import {
  Column,
  AfterLoad,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { Exclude, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/role.entity';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
  Validate,
} from 'class-validator';
import { Status } from '../statuses/status.entity';
import { IsNotExist } from '../utils/validators/is-not-exists.validator';
import { FileEntity } from '../files/file.entity';
import { IsExist } from '../utils/validators/is-exists.validator';
import * as bcrypt from 'bcryptjs';
import { EntityHelper } from 'src/utils/entity-helper';
import { AuthProvidersEnum } from 'src/auth/auth-providers.enum';
import { CrudValidationGroups } from '@nestjsx/crud';

@Entity()
export class Product extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Test Product Name' })
  @Index()
  @Column({ nullable: false })
  name: string;

  @ApiProperty({ example: 'Test Product Description' })
  @Column({ nullable: true })
  description: string | null;


  // @ApiProperty({ example: 'John' })
  // @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  // @IsNotEmpty({ groups: [CrudValidationGroups.CREATE] })
  // @Index()
  // @Column({ nullable: true })
  // firstName: string | null;

  // @ApiProperty({ example: 'Doe' })
  // @IsOptional({ groups: [CrudValidationGroups.UPDATE] })
  // @IsNotEmpty({ groups: [CrudValidationGroups.CREATE] })
  // @Index()
  // @Column({ nullable: true })
  // lastName: string | null;

  // @CreateDateColumn()
  // createdAt: Date;

  // @UpdateDateColumn()
  // updatedAt: Date;

  // @DeleteDateColumn()
  // deletedAt: Date;
}
