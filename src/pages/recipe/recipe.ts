import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage {

  recipe: {title: string, ingredients: Array <{ product: string, quantity: number, color: string }>, instructions: string[]};

  inventoryList: Array<{ product: string, quantity: number }>;
  shoppingList: Array<{ product: string, quantity: number }>;

  constructor( public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public events: Events ) {
     this.recipe = navParams.data.recipe;
     this.inventoryList = navParams.data.inventory;
     this.shoppingList = navParams.data.shopping;

     this.updateColors();

     this.events.subscribe( 'listChange', () => {
       this.updateColors();
     });
  }

  updateColors() {
    this.recipe.ingredients.forEach( (ingredient) => {
      ingredient.color = 'white';
      this.inventoryList.forEach( (inventoryItem) => {
        if ( ingredient.product === inventoryItem.product ) {
          ingredient.color = ( ingredient.quantity < inventoryItem.quantity ) ? 'green':'white';
        }
      });
    });
  }
}
