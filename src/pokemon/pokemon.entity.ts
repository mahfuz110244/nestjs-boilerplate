import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { EntityHelper } from 'src/utils/entity-helper';
import { ApiProperty } from '@nestjs/swagger';

@Entity('pokemon')
export class Pokemon  extends EntityHelper {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('varchar', { length: 100, unique: true})
    name: string;

    @ApiProperty()
    @Column('varchar', { length: 500 })
    type: string;

    @ApiProperty()
    @Column('numeric')
    pokedex: number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
}