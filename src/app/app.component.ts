import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, NavController } from 'ionic-angular';
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

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      let inventoryData = this.storage.get('inventory');
      let shoppingData = this.storage.get('shopping');

      Promise.all([inventoryData,shoppingData]).then( ( values ) => {
        this.nav.push(TabsPage, values);
      });

    });
  }
}
