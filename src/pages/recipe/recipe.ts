import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage {

  recipe: {title: string, ingredients: Array <{ product: string, quantity: number }>};

  inventory: Array<{ product: string, quantity: number }>;
  shopping: Array<{ product: string, quantity: number }>;

  constructor( public navCtrl: NavController, public navParams: NavParams, public storage: Storage ) {
    this.recipe = navParams.data;

    this.storage.get('inventory').then( (val) => {
      if (val != null) {
        this.inventory = val;
      }
    });
    this.storage.get('shopping').then( (val) => {
      if (val != null) {
        this.shopping = val;
      }
    });


    }

    c( ingredient ) {
      console.log(this.shopping);
      let color = 'white';
      if (this.inventory !== undefined && this.shopping !== undefined) {

        this.inventory.forEach( ( inventoryIngredient ) => {
         if ( ingredient.product == inventoryIngredient.product && ingredient.quantity <= inventoryIngredient.quantity) {
           color = 'lightgreen';
         }
        });

        this.shopping.forEach( ( shoppingIngredient ) => {
         if ( ingredient.product == shoppingIngredient.product && ingredient.quantity <= shoppingIngredient.quantity) {
           color = 'lightblue';
         }
        });

        return color;;
      }
    }
}
