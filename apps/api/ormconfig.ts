import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Mob, User } from '@omt/api/common';

// TODO: Setup Configuration Service with .env
export const ORM_CONFIG: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST || 'localhost',
    port: 5432,
    username: process.env.TYPEORM_USERNAME || 'postgres',
    password: process.env.TYPEORM_PASSWORD || 'postgres',
    database: process.env.TYPEORM_DATABASE || 'mobtimer',
    entities: [Mob, User]
};
