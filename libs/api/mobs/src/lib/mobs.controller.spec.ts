import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { MobsController } from './mobs.controller';
import { MobsService } from './mobs.service';

describe('MobsController', () => {
    let controller: MobsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [MobsController],
            providers: [
                {
                    provide: MobsService,
                    useClass: Repository
                }
            ]
        }).compile();

        controller = module.get<MobsController>(MobsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
