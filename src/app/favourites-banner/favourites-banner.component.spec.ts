import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesBannerComponent } from './favourites-banner.component';

describe('FavouritesBannerComponent', () => {
  let component: FavouritesBannerComponent;
  let fixture: ComponentFixture<FavouritesBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouritesBannerComponent]
    });
    fixture = TestBed.createComponent(FavouritesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
