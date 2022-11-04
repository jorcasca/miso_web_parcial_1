import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee.component';
import { CoffeeRoutingModule } from './coffee-routing.module';

@NgModule({
  declarations: [CoffeeComponent],
  imports: [CommonModule, CoffeeRoutingModule],
})
export class CoffeeModule {}
