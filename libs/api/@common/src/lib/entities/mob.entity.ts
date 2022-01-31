import { Entity, OneToMany, Column } from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from './base.entity';

@Entity('mob')
export class Mob extends BaseEntity {
    @Column()
    public name: string;

    @OneToMany(() => User, (user) => user.mob)
    public users: Array<User>;
}
