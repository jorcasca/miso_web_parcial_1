import { Component, OnInit } from '@angular/core';
import { ICoffee } from 'src/app/interfaces/coffee.interface';
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

  getCoffeeList() {
    this.coffeeService.getCoffeeList().subscribe((coffeeList) => {
      this.coffeeList = coffeeList;
    });
  }
}
