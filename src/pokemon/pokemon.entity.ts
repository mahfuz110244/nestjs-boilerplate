import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('pokemon')
export class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 500, unique: true})
    name: string

    @Column('varchar', { length: 500 })
    type: string

    @Column('numeric')
    pokedex: number
}