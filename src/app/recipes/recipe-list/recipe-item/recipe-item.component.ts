import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe?: Recipe;
  //Now I don't want to emit an event
  /* @Output() recipeItemClicked: EventEmitter<Recipe> =
    new EventEmitter<Recipe>(); */
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  /*  displayRecipeDetailPage() {
    console.log('displayRecipeDetailPage is clicked');
    this.recipeItemClicked.emit();
  } */

  onRecipeItemClicked() {
    // this.recipeItemClicked.emit(this.recipe);
    /* Instead here, I want to call some method in my service  which will then transfer this data
    for me*/

    /* this.recipeService.recipeSelected.subscribe((recipe: Recipe) =>
      this.recipe = recipe
    ); */
    this.recipeService.recipeSelected.emit(this.recipe);

    /* Let's make a check, let's log the value of this recipe */
    console.log(this.recipe);
  }
}
