import { Entity, Column, ManyToOne } from 'typeorm';
import { Mob } from './mob.entity';
import { BaseEntity } from './base.entity';

@Entity('user')
export class User extends BaseEntity {
    @Column()
    public name: string;

    @Column()
    public isAway: boolean;

    @Column({ type: 'datetimeoffset', nullable: true })
    public turnEndsAt?: Date;

    @Column()
    public mobId: string;

    @ManyToOne((type) => Mob, (mob) => mob.users)
    public mob: Mob;
}
