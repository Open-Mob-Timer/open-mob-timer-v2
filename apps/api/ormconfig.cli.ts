import { ORM_CONFIG } from './ormconfig';
export = {
    ...ORM_CONFIG,
    migrations: ['apps/api/src/migrations/*'],
    cli: {
        migrationsDir: 'apps/api/src/migrations'
    }
};
