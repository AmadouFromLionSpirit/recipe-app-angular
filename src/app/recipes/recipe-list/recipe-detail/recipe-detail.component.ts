import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe | undefined;
  isShow: boolean = false;
  constructor(private recipeService: RecipeService) {}
  //constructor(private shoppingListService: ShoppingListService) {}
  toggleDisplay() {
    console.log('Button is clicked');
    this.isShow = !this.isShow;
    console.log(this.isShow);
  }

  addIngredientsToShoppingList() {
    if (this.recipe?.ingredients) {
      this.recipeService.addAllIngredientsToShoppingList(
        this.recipe.ingredients
      );
    }

    /*  let ingredientsOfRecipe = this.recipe?.getIngredients();
    if (ingredientsOfRecipe) {
      for (var recipeIngredient of ingredientsOfRecipe) {
        this.shoppingListService.addIngredient(recipeIngredient);
      }
    } */
  }
}
