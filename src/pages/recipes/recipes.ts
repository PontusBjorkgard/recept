import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipePage } from '../recipe/recipe';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {

  recipes: Array<{title: string, ingredients: Array<{product: string, quantity: number }>, instructions: string[]}>;

  inventoryList: Array<{ product: string, quantity: number }>;
  shoppingList: Array<{ product: string, quantity: number }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage ) {


  this.recipes = navParams.data.recipes;
  this.inventoryList = navParams.data.inventory;
  this.shoppingList = navParams.data.shopping;

  }

  addRecipe( recipe ) {
    this.recipes.push({
      title: recipe.value,
      ingredients: [{}],
      instructions: []
    });
    recipe.value = null;

    this.storage.set('recipes', this.recipes);
    this.showIngredients( this.recipes[ this.recipes.length -1] );
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
