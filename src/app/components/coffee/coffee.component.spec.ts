/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeComponent } from './coffee.component';
import { HttpClientModule } from '@angular/common/http';

describe('CoffeeComponent', () => {
  let component: CoffeeComponent;
  let fixture: ComponentFixture<CoffeeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CoffeeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
