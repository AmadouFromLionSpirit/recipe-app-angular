import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  selectedRecipe?: Recipe;
  displayRecipeList: boolean = true;
  displayRecipeDetail: boolean = false;

  onRecipeItemSelected(recipeThatWasSelected: Recipe) {
    this.selectedRecipe = recipeThatWasSelected;
    console.log(this.selectedRecipe);
  }
}
