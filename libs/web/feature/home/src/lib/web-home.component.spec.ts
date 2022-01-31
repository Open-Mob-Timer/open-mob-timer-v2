import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFeatureHomeComponent } from './web-home.component';

describe('WebFeatureHomeComponent', () => {
    let component: WebFeatureHomeComponent;
    let fixture: ComponentFixture<WebFeatureHomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WebFeatureHomeComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WebFeatureHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
