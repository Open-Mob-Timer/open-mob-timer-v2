import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMobComponent } from './create-mob.component';

describe('CreateMobComponent', () => {
  let component: CreateMobComponent;
  let fixture: ComponentFixture<CreateMobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
