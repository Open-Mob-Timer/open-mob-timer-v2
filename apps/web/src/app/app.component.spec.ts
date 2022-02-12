import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ENVIRONMENT } from '@omt/web/core';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';

describe('AppComponent', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AppComponent],
                imports: [NbThemeModule.forRoot({ name: 'cosmic' }), NbLayoutModule, RouterTestingModule],
                providers: [
                    {
                        provide: ENVIRONMENT,
                        useValue: {}
                    }
                ]
            }).compileComponents();
        })
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
