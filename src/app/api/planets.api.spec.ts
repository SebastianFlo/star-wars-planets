import { TestBed } from '@angular/core/testing';

import { PlanetsApi } from './planets.api';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PlanetsApi', () => {
  let service: PlanetsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(PlanetsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
