import { Component, OnInit } from '@angular/core';
import { ICoffee, CoffeeType } from 'src/app/interfaces/coffee.interface';
import { CoffeeService } from 'src/app/services/coffee/coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})
export class CoffeeComponent implements OnInit {
  coffeeList: Array<ICoffee> = [];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit() {
    this.getCoffeeList();
  }

  totalOriginCoffee = () => this.totalTypeCoffee(CoffeeType.ORIGIN);

  totalBlendCoffee = () => this.totalTypeCoffee(CoffeeType.BLEND);

  getCoffeeList = () => {
    this.coffeeService.getCoffeeList().subscribe((coffeeList) => {
      this.coffeeList = coffeeList;
    });
  };

  totalTypeCoffee = (type: CoffeeType) =>
    this.coffeeList.filter((coffee) => coffee.tipo == type).length;
}
