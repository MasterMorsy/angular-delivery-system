import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor(private data: DataService) { }

  meals: any[];
  cart_no: number;
  cart_items:any[];

  addToCart = meal => {
      if (this.cart_items.map( item => item.id).includes(meal.id )) {
        let current_item = this.cart_items.filter( item => item.id === meal.id)[0]
        current_item.quantity = current_item.quantity + 1
      } else {
        this.cart_items.push(meal)
        this.data.change_total_cart(this.cart_no + 1)
      }
    this.data.change_current_items(this.cart_items)
  }

  ngOnInit() {
    this.data.current_cart.subscribe( cart_no => this.cart_no = cart_no)
    this.data.current_items.subscribe(cart_items => this.cart_items = cart_items )
    this.data.meals.subscribe(meals => this.meals = meals )
  }

}
