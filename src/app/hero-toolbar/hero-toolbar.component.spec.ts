import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroToolbarComponent } from './hero-toolbar.component';

describe('HeroToolbarComponent', () => {
  let component: HeroToolbarComponent;
  let fixture: ComponentFixture<HeroToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
