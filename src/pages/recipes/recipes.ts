import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {

  recipes: Array<{title: string, ingredients: Array<{product: string, quantity: number }>}>;
  constructor(public navCtrl: NavController) {
    this.recipes = [
      {
        title: 'Recept',
        ingredients: [
          {
          product: 'Kakka',
          quantity: 2
        },
        {
        product: 'Piss',
        quantity: 1
        }
      ]
    },
    {
      title: 'Recept 2',
      ingredients: [
        {
        product: 'Pens',
        quantity: 2
      },
      {
      product: 'Kok',
      quantity: 1
      }
    ]
  },
  ]
  }

  showIngredients( recipe ) {
    this.navCtrl.push( RecipePage, recipe );
  }

}
