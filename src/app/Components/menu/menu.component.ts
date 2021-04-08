import { Component, OnInit } from '@angular/core';
import { Dish } from '../../Shared/dish';
import { DishService } from '../../Services/dish.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    private dishService: DishService
  ) { }
  // all variable declared here
  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
    console.log("menu dishes", this.dishes);
  }
  menu = 'Menu';

  //varibale by coursera
  selectedDishes!: Dish;
  dishes!: Dish[]
  onSelect = (dish: Dish) => {
    console.log(dish);
    this.selectedDishes = dish
  };
}
