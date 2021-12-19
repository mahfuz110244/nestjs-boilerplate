import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { Transform } from 'class-transformer';

export class ProductDto {
  @ApiProperty({ example: 'Test 1' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'description' })
  @IsNotEmpty()
  description: string;
}
