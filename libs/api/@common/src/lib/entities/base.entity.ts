import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @CreateDateColumn({ type: 'timestamp' })
    public createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    public updatedAt: Date;
}
