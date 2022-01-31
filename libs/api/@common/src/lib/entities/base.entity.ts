import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @CreateDateColumn({ type: 'datetimeoffset' })
    public createdAt: Date;

    @UpdateDateColumn({ type: 'datetimeoffset' })
    public updatedAt: Date;
}
