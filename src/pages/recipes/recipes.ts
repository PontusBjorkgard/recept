import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipePage } from '../recipe/recipe';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {

  recipes: Array<{title: string, ingredients: Array<{product: string, quantity: number }>}>;

  inventoryList: Array<{ product: string, quantity: number }>;
  shoppingList: Array<{ product: string, quantity: number }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage ) {
    this.recipes = [
      {
        title: 'Recept',
        ingredients: [
          {
          product: 'Ingrediens1',
          quantity: 2
        },
        {
        product: 'Ingrediens2',
        quantity: 1
        }
      ]
    },
    {
      title: 'Recept 2',
      ingredients: [
        {
        product: 'Ingrediens3',
        quantity: 2
      },
      {
      product: 'Ingrediens1',
      quantity: 1
      }
    ]
  },
];


  this.inventoryList = navParams.data.inventory;
  this.shoppingList = navParams.data.shopping;

  }

  showIngredients( recipe ) {
    let data = {
      recipe: recipe,
      inventory: this.inventoryList,
      shopping: this.shoppingList
    };
    this.navCtrl.push( RecipePage, data );
  }

}
