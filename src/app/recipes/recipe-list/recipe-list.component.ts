import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  /*  @Output() recipeItemThatHasBeenSelected: EventEmitter<Recipe> =
    new EventEmitter<Recipe>(); */
  recipes: Recipe[] | undefined;
  /*  @Output() recipeWasSelected = new EventEmitter<Recipe>(); */

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  /* onItemClicked(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } */
  /*  recipeItemClicked(recipeSelected: Recipe) {
    this.recipeItemThatHasBeenSelected.emit(recipeSelected);
    // this.recipeItemThatHasBeenSelected = recipeSelected;
    console.log(this.recipeItemThatHasBeenSelected);
  } */
}
