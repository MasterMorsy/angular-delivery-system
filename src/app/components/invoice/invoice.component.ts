import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  total:number;
  username:string;
  address:string;
  phone:string;
  cart_items:any[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.current_items.subscribe(cart_items => this.cart_items = cart_items )
    this.data.total.subscribe(total => this.total = total )
    this.data.username.subscribe( username => this.username = username )
    this.data.address.subscribe( address => this.address = address )
    this.data.phone.subscribe( phone => this.phone = phone )
  }

}
