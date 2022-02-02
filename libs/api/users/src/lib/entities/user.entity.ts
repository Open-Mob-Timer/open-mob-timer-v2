import { BaseEntity } from '@omt/api/common';
import { Mob } from '@omt/api/mobs';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
    @Column()
    public name: string;

    @Column()
    public isAway: boolean;

    @Column({ type: 'timestamp', nullable: true })
    public turnEndsAt?: Date;

    @Column()
    public mobId: string;

    @ManyToOne(() => Mob, (mob: Mob) => mob.users)
    public mob: Mob;
}
