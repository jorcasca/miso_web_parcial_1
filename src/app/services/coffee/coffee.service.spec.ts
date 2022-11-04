/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CoffeeService } from './coffee.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('Service: Coffee', () => {
  let coffeeService: CoffeeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoffeeService]
    });
    coffeeService = TestBed.inject(CoffeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(coffeeService).toBeTruthy();
  });
});
