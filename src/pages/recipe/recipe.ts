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
    // this.recipe = navParams.data.recipe;
    // this.inventory = navParams.data.inventory;
    // this.shopping = navParams.data.shopping;

    console.log( navParams.data );
  }
}
