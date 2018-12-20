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
  recipeList: any;

  constructor( public navParams: NavParams ) {
    console.log(navParams.data)
    this.inventoryList = navParams.data[0];
    this.shoppingList = navParams.data[1];
  }


  tab1Root = RecipesPage;
  tab2Root = IngredientsPage;
  tab3Root = ContactPage;

}
