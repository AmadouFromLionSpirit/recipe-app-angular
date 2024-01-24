import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [],
})
export class ShoppingListComponent implements OnInit {
  /*   ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ]; */
  ingredients: Ingredient[] | undefined;
  ingredientAdded: Ingredient | undefined;
  valueOfIngredientInput: string = '';
  valueOfAmountInput?: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.shoppingListService.addButtonClicked.subscribe(
      (ingredient: Ingredient) => {
        this.ingredientAdded = ingredient;
        //this.shoppingListService.addIngredient(ingredient);
      }
    );
  }
}
