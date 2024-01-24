import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  selectedRecipe?: Recipe;
  displayRecipeList: boolean = true;
  displayRecipeDetail: boolean = false;

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  onRecipeItemSelected(recipeThatWasSelected: Recipe) {
    this.selectedRecipe = recipeThatWasSelected;
    console.log(this.selectedRecipe);
  }
}
