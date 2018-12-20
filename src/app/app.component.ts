import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, Events, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav')
  public nav: NavController;

  inventoryList: any;
  shoppingList: any;
  recipeList: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage, public events: Events) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      let inventoryData = this.storage.get('inventory');
      let shoppingData = this.storage.get('shopping');

      Promise.all([inventoryData,shoppingData]).then( ( values ) => {
        this.nav.push(TabsPage, values);
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
    });
  }
}
