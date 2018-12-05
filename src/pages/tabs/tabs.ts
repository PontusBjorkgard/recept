import { Component } from '@angular/core';

import { IngredientsPage } from '../ingredients/ingredients';
import { ContactPage } from '../contact/contact';
import { RecipesPage } from '../recipes/recipes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  shoppingList = 'snopping list haha';
  inventoryList = 'kakka listan haha';

  tab1Root = RecipesPage;
  tab2Root = IngredientsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
