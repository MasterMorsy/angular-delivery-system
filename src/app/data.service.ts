import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  current_meals = [
    { id: 1, category: { name: 'pizza', id: 1}, name: 'pizza margereta', image: 'https://try-sunbasket-staging-assets.s3-us-west-2.amazonaws.com/2018/08/diabetes-friendly.jpg', quantity: 1, price: 25.25},
    { id: 2, category: { name: 'pizza', id: 1}, name: 'pizza meat', image: 'https://try-sunbasket-staging-assets.s3-us-west-2.amazonaws.com/2018/08/diabetes-friendly.jpg', quantity: 1, price: 50.25},
    { id: 3, category: { name: 'pizza', id: 1}, name: 'pizza Chiken', image: 'https://try-sunbasket-staging-assets.s3-us-west-2.amazonaws.com/2018/08/diabetes-friendly.jpg', quantity: 2, price: 10},
    { id: 4, category: { name: 'cupcake', id: 2}, name: 'cupcake caramel', image: 'https://try-sunbasket-staging-assets.s3-us-west-2.amazonaws.com/2018/08/diabetes-friendly.jpg', quantity: 1, price: 30},
    { id: 5, category: { name: 'cupcake', id: 2}, name: 'cupcake chokolate', image: 'https://try-sunbasket-staging-assets.s3-us-west-2.amazonaws.com/2018/08/diabetes-friendly.jpg', quantity: 1, price: 125},
    { id: 6, category: { name: 'Burger', id: 3}, name: 'Burger meat', image: 'https://try-sunbasket-staging-assets.s3-us-west-2.amazonaws.com/2018/08/diabetes-friendly.jpg', quantity: 1, price: 85},
    { id: 7, category: { name: 'meat', id: 4}, name: 'salad meat', image: 'https://try-sunbasket-staging-assets.s3-us-west-2.amazonaws.com/2018/08/diabetes-friendly.jpg', quantity: 1, price: 45},
    { id: 8, category: { name: 'meat', id: 4}, name: 'meat soup', image: 'https://try-sunbasket-staging-assets.s3-us-west-2.amazonaws.com/2018/08/diabetes-friendly.jpg', quantity: 1, price: 65},
    { id: 9, category: { name: 'meat', id: 4}, name: 'Fata meat', image: 'https://try-sunbasket-staging-assets.s3-us-west-2.amazonaws.com/2018/08/diabetes-friendly.jpg', quantity: 1, price: 30}
  ]

  // all meals
  private all_meals = new BehaviorSubject<any[]>(this.current_meals)
  meals = this.all_meals.asObservable()

  // total_cart_count
  private total_cart = new BehaviorSubject<number>(0)
  current_cart = this.total_cart.asObservable()

  // total_cart_count
  private selected_items = new BehaviorSubject<any[]>([])
  current_items = this.selected_items.asObservable()

  // final total
  private final_total = new BehaviorSubject<number>(0)
  total = this.final_total.asObservable()

  // user_name
  private user_name = new BehaviorSubject<string>(" ")
  username = this.user_name.asObservable()

  // user address
  private user_address = new BehaviorSubject<string>(" ")
  address = this.user_address.asObservable()

  // user phone
  private user_phone = new BehaviorSubject<string>(" ")
  phone = this.user_phone.asObservable()

  constructor(){}

  // listen to meals change
  change_meals = (new_meals:any[]) => {
    if ( new_meals.length > 0 ) this.all_meals.next(new_meals)
    else this.all_meals.next(this.current_meals)
  }

  // listen to total_cart_count changes
  change_total_cart = (new_total_cart:number) => {
    this.total_cart.next(new_total_cart)
  }

  // listen to selected_items changes
  change_current_items = (new_current_items:any[]) => {
    this.selected_items.next(new_current_items)
  }

  // listen to final_total
  change_total = (new_total:number) => {
    this.final_total.next(new_total)
  }

  // listen to user_name
  change_username = (new_username:string) => {
    this.user_name.next(new_username)
  }

  // listen to user_address
  change_address = (new_address:string) => {
    this.user_address.next(new_address)
  }

  // listen to user_phone
  change_phone = (new_phone:string) => {
    this.user_phone.next(new_phone)
  }

}
