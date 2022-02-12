import { TestBed } from '@angular/core/testing';

import { ApiMobsService } from './mobs.service';

describe('MobsService', () => {
    let service: ApiMobsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ApiMobsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
