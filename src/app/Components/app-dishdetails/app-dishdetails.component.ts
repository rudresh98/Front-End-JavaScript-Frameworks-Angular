import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../Shared/dish'
@Component({
  selector: 'app-dishdetails',
  templateUrl: './app-dishdetails.component.html',
  styleUrls: ['./app-dishdetails.component.scss']
})
export class AppDishdetailsComponent implements OnInit {

  @Input() dish!: Dish;
  constructor() {
    console.log("dishdetail vala dish hai ye", this.dish);

  }

  ngOnInit(): void {
  }
  showDish = (a: any) => {
    console.log("show dihs ap dish details se", a);

  }
}
