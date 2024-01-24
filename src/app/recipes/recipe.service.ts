import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
/* This service should be the class where we manage our recipes */
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'For People who want to be Fat',
      'https://upload.wikimedia.org/wikipedia/commons/n/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    /* If I want to return it like this, I actually return the direct reference to this array
    and since arrays and objects are reference types in JS, now if we now change something on this array
     we will change it on the array in this service, therefore I will call slice with no arguments */
    //return this.recipes;

    //The slice method returns selected elements in a n array, as a new array. So in our case, this will return
    //a simple array which is an exact copy of then one in this service file
    /* So with that, we really can't access the recipes array stored here from outside
    We only get a copy*/
    return this.recipes.slice();
  }

  addAllIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
