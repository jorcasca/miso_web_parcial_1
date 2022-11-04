/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { faker } from '@faker-js/faker';
import { CoffeeComponent } from './coffee.component';
import { HttpClientModule } from '@angular/common/http';
import { ICoffee } from 'src/app/interfaces/coffee.interface';

describe('CoffeeComponent', () => {
  let component: CoffeeComponent;
  let fixture: ComponentFixture<CoffeeComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CoffeeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeComponent);
    component = fixture.componentInstance;
    for (let i = 0; i < 3; i++) {
      const coffee: ICoffee = {
        id: faker.datatype.number(),
        nombre: faker.lorem.sentence(),
        tipo: faker.lorem.sentence(),
        region: faker.lorem.sentence(),
        sabor: faker.lorem.sentence(),
        altura: faker.datatype.number(),
        imagen: faker.lorem.sentence(),
      };
      component.coffeeList.push(coffee);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table head', () => {
    expect(debug.query(By.css('thead')).childNodes.length).toBeGreaterThan(0);
  });

  it('should have a table body', () => {
    expect(debug.query(By.css('tbody')).childNodes.length).toBeGreaterThan(0);
  });

  it('should have four tr element ', () => {
    expect(debug.query(By.css('tr')).childNodes.length).toBe(4);
  });

  it('should correspond data', () => {
    const dd = debug.queryAll(By.css('dd'));
    component.coffeeList.forEach((c, i) => {
      expect(dd[i * 4].nativeElement.textContent).toEqual(c.id.toString());
      expect(dd[i * 4 + 1].nativeElement.textContent).toEqual(c.nombre);
      expect(dd[i * 4 + 2].nativeElement.textContent).toEqual(c.tipo);
      expect(dd[i * 4 + 3].nativeElement.textContent).toEqual(c.region);
    });
  });
});
