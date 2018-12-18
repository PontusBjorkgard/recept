import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, Events } from 'ionic-angular';

import { IngredientsPage } from '../ingredients/ingredients';
import { ContactPage } from '../contact/contact';
import { RecipesPage } from '../recipes/recipes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  inventoryList: any;
  shoppingList: any;
  recipeList: any;

  constructor( public storage: Storage, public events: Events ) {
    storage.forEach((index, key, value) => {

	     switch( key ) {
         case 'inventory': {
           this.inventoryList = index;
         }
         case 'shopping': {
           this.shoppingList = index;
         }
         default: break;
       }

    });

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
