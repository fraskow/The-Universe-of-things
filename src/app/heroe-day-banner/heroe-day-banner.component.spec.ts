import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeDayBannerComponent } from './heroe-day-banner.component';

describe('HeroeDayBannerComponent', () => {
  let component: HeroeDayBannerComponent;
  let fixture: ComponentFixture<HeroeDayBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeDayBannerComponent]
    });
    fixture = TestBed.createComponent(HeroeDayBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
