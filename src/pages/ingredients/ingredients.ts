import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ingredients',
  templateUrl: 'ingredients.html'
})
export class IngredientsPage {

  listType: string;
  ingredients: Array<{ product: string, quantity: number }>;


  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.listType = navParams.data;
    this.ingredients = [];
  }


  addIngredient( product, quantity) {

    let duplicate = false;
    this.ingredients.forEach( ( ingredient ) => {
      if (ingredient.product == product.value) {
        console.log('Finns redan');
        ingredient.quantity = +ingredient.quantity + +quantity.value;
        duplicate = true;
        return;
      }
    });

    if ( !duplicate ) {
      this.ingredients.push(
        { product: product.value, quantity: quantity.value }
      );
    }

    product.value = null;
    quantity.value = null;
  }


  removeIngredient( ingredient ) {
    this.ingredients.splice( this.ingredients.indexOf(ingredient), 1 );
  }

}
