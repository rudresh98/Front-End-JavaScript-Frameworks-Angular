import { Component, OnInit } from '@angular/core';
import { DISHESCOUR } from '../../Shared/dishes';
import { Dish } from 'src/app/Shared/dish';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() { }
  // all variable declared here

  menu = 'Menu';

  //varibale by coursera
  selectedDishes!: Dish;
  dishes: Dish[] = DISHESCOUR;

  ngOnInit(): void {
    console.log(this.dishes);
  }

  onSelect = (dish: Dish) => {
    console.log(dish);
    this.selectedDishes = dish
  };
}
