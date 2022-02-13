import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '@omt/api/users';
import { ORM_CONFIG } from '../../ormconfig';
import { MobsModule } from '@omt/api/mobs';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [
        TypeOrmModule.forRoot(ORM_CONFIG),
        UsersModule,
        MobsModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'web')
        })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
