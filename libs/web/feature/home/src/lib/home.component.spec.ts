import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbFormFieldModule, NbIconModule, NbInputModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MobsService } from '@omt/web/data';
import { CreateMobComponent } from './components/create-mob/create-mob.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeComponent, CreateMobComponent],
            imports: [
                FormsModule,
                NbThemeModule.forRoot(),
                NbButtonModule,
                NbFormFieldModule,
                NbIconModule,
                NbEvaIconsModule,
                NbInputModule
            ],
            providers: [
                {
                    provide: MobsService,
                    useValue: {}
                }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
