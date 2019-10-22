import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  cart_no:number;
  cart_items:any[];

  constructor(private data: DataService) { }

  remove_item = id => {
    const new_items = this.cart_items.filter( item => item.id !== id)
    this.data.change_total_cart(this.cart_no - 1)
    this.data.change_current_items(new_items)
  }

  total_price = () => {
    let total_one_items:any[] = []
    this.cart_items.map( item => total_one_items.push(Number(item.quantity*item.price)) )
    const total = this.cart_items.length === 0 ? 0 : total_one_items.reduce( (a,b ) => a + b, 0 )
    this.data.change_total(total)
    return total;
  }

  change_address = $event => {
    this.data.change_address($event.target.value)
  }

  change_phone = $event => {
    this.data.change_phone($event.target.value)
  }

  change_username = $event => {
    console.log($event.target.value)
    this.data.change_username($event.target.value)
  }

  chnage_item_quantity = ($event, id) => {
    let current_item = this.cart_items.filter( item => item.id === id)[0]
    current_item.quantity = Number($event.target.value)
  }

  ngOnInit() {
    this.data.current_cart.subscribe(cart_no => this.cart_no = cart_no )
    this.data.current_items.subscribe(cart_items => this.cart_items = cart_items )
  }

}
