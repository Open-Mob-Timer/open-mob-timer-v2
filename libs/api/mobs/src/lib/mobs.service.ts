import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mob } from '@omt/api/common';
import { MobCreateDto } from './dtos/mob-create.dto';

@Injectable()
export class MobsService {
    constructor(
        @InjectRepository(Mob)
        private mobsRepository: Repository<Mob>
    ) {}

    public create(mob: MobCreateDto): Mob {
        return this.mobsRepository.create(mob);
    }
}
