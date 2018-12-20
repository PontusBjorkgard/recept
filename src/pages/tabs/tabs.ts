import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, Events } from 'ionic-angular';

import { IngredientsPage } from '../ingredients/ingredients';
import { ContactPage } from '../contact/contact';
import { RecipesPage } from '../recipes/recipes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  inventoryList: any;
  shoppingList: any;
  recipesList: any;

  constructor( public navParams: NavParams, public events: Events, public storage: Storage ) {

    this.inventoryList = navParams.data[0];
    this.shoppingList = navParams.data[1];
    this.recipesList = navParams.data[2];

    events.subscribe('transfered', (ingredient) => {

      this.inventoryList.push(
        { product: ingredient.product, quantity: ingredient.quantity }
      );

      setTimeout( () => {
        this.shoppingList.splice( this.shoppingList.indexOf(ingredient), 1 )

        this.storage.set( 'inventory', this.inventoryList);
        this.storage.set( 'shopping', this.shoppingList);
      }, 400 );
    });
  }


  tab1Root = RecipesPage;
  tab2Root = IngredientsPage;
  tab3Root = ContactPage;

}
