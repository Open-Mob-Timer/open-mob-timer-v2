import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '@omt/api/users';
import { ORM_CONFIG } from '../../ormconfig';
import { MobsModule } from '@omt/api/mobs';

@Module({
    imports: [TypeOrmModule.forRoot(ORM_CONFIG), UsersModule, MobsModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
