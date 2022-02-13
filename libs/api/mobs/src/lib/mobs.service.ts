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

    public async create(mob: MobCreateDto): Promise<Mob> {
        const entity = this.mobsRepository.create(mob);
        return await this.mobsRepository.save(entity);
    }
}
