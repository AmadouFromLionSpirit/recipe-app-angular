import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe?: Recipe;
  @Output() recipeItemClicked: EventEmitter<Recipe> =
    new EventEmitter<Recipe>();
  ngOnInit(): void {}

  /*  displayRecipeDetailPage() {
    console.log('displayRecipeDetailPage is clicked');
    this.recipeItemClicked.emit();
  } */

  onRecipeItemClicked() {
    this.recipeItemClicked.emit(this.recipe);
    /* Let's make a check, let's log the value of this recipe */
    console.log(this.recipe);
  }
}
