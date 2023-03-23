import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemThatHasBeenSelected: EventEmitter<Recipe> =
    new EventEmitter<Recipe>();
  /*  @Output() recipeWasSelected = new EventEmitter<Recipe>(); */
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simply test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'The second Recipe',
      'This is the content for the second recipe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
  ];

  constructor() {}
  ngOnInit(): void {}
  /* onItemClicked(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } */
  recipeItemClicked(recipeSelected: Recipe) {
    this.recipeItemThatHasBeenSelected.emit(recipeSelected);
    // this.recipeItemThatHasBeenSelected = recipeSelected;
    console.log(this.recipeItemThatHasBeenSelected);
  }
}
