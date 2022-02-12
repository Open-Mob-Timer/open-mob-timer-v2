import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mob } from '@omt/api/common';
import { MobsController } from './mobs.controller';
import { MobsService } from './mobs.service';

@Module({
    imports: [TypeOrmModule.forFeature([Mob])],
    controllers: [MobsController],
    providers: [MobsService],
    exports: []
})
export class MobsModule {}
