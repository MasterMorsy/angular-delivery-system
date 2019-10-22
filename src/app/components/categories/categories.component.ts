import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {

  constructor() { }

  categories: any[] = [
    {id: 1, name: 'Pizza', image: '/assets/images/pizza.png'},
    {id: 2, name: 'cupcake', image: '/assets/images/cupcake.png'},
    {id: 3, name: 'hamburger', image: '/assets/images/hamburger.png'},
    {id: 4, name: 'meat', image: '/assets/images/meat.png'}
  ]

  runTab = id => {
    const meals = document.querySelectorAll(".meal-contain")
    const iterator = meals[Symbol.iterator]();
    for ( let meal of iterator) {
      meal.style.display = 'none'
      if ( meal.classList.contains(id) ) {
        meal.style.display = 'block'
      }
    }
  }

  ngOnInit() {
  }

}
