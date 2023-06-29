import { TestBed } from '@angular/core/testing';

import { HeroByRaceService } from './hero-by-race.service';

describe('HeroByCategoryService', () => {
  let service: HeroByRaceService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroByRaceService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
