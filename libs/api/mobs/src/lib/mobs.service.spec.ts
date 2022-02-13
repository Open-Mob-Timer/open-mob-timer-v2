import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Mob } from '@omt/api/common';
import { Repository } from 'typeorm';
import { MobsService } from './mobs.service';

describe('MobsService', () => {
    let service: MobsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MobsService,
                {
                    provide: getRepositoryToken(Mob),
                    useClass: Repository
                }
            ]
        }).compile();

        service = module.get<MobsService>(MobsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
