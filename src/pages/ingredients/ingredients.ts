import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-ingredients',
  templateUrl: 'ingredients.html'
})
export class IngredientsPage {

  listType: any;
  ingredients: Array<{ product: string, quantity: number }>;

  constructor(public navCtrl: NavController, navParams: NavParams, public storage: Storage, public events: Events) {

    this.listType = navParams.data;
    this.ingredients = navParams.data.list;

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

    this.storage.set( this.listType.id, this.ingredients );
    product.value = null;
    quantity.value = null;
  }


  removeIngredient( ingredient ) {
    this.ingredients.splice( this.ingredients.indexOf(ingredient), 1 );
    this.storage.set( this.listType.id, this.ingredients );
  }

  updateIngredient( ingredient, product, quantity ) {

    ingredient.product = product.value;
    ingredient.quantity = quantity.value;
    ingredient.edit = false;

    this.storage.set( this.listType.id, this.ingredients );
  }


  focus( field ) {
    setTimeout( () => {
      field.setFocus();
    }, 50)
  }

  transferIngredient( ingredient ) {
    this.events.publish('transfered', ingredient);
  }

}
