import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Mob } from '@omt/api/mobs';
import { User } from '@omt/api/users';

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
