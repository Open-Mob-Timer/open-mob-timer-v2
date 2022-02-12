import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Mob, User } from '@omt/api/common';

// TODO: Setup Configuration Service with .env
export const ORM_CONFIG: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'mobtimer',
    entities: [Mob, User]
};
