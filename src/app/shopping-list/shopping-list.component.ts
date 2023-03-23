import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];
  valueOfIngredientInput: string = '';
  valueOfAmountInput?: number;

  onAddButtonClickedFired(ingredient: Ingredient) {
    this.valueOfIngredientInput = ingredient.name;
    this.valueOfAmountInput = ingredient.amount;
    this.ingredients.push(
      new Ingredient(this.valueOfIngredientInput, this.valueOfAmountInput)
    );

    /* There is a simple way to do it / TODO add the correction below */
  }
}
