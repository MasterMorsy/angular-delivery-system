import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  meals: any[];

  constructor(private data: DataService) { }

  search_engine = $event => {
    this.data.change_meals([])
    let search = $event.target.value.toLowerCase()
    this.meals.map( item => {
      console.log(item.name.toLowerCase().search(search) )
    } )
    const iterator = this.meals[Symbol.iterator]();

    let new_filter:any[] = []
    for ( let item of iterator ) {
      if ( item.name.search(search) !== -1 ) {
        new_filter.push(item)
        this.data.change_meals(new_filter)
      }
    }
  }

  ngOnInit() {
    this.data.meals.subscribe(meals => this.meals = meals )
  }

}
