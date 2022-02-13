import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MobsService } from './mobs.service';

describe('MobsService', () => {
    let service: MobsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [HttpClient]
        });
        service = TestBed.inject(MobsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
