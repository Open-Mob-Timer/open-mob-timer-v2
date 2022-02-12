import { Test, TestingModule } from '@nestjs/testing';
import { MobsService } from './mobs.service';

describe('MobsService', () => {
    let service: MobsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MobsService]
        }).compile();

        service = module.get<MobsService>(MobsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
