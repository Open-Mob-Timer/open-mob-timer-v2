import { BaseEntity } from '@omt/api/common';
import { User } from '@omt/api/users';
import { Entity, OneToMany, Column } from 'typeorm';

@Entity('mob')
export class Mob extends BaseEntity {
    @Column()
    public name: string;

    @OneToMany(() => User, (user: User) => user.mob)
    public users: Array<User>;
}
