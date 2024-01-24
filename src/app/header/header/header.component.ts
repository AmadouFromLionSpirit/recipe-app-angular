import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  /*  displayRecipe: boolean = false;
  displayShoppingList: boolean = false; */
  @Output() recipeLinkClicked = new EventEmitter<string>();
  @Output() shoppingListClicked = new EventEmitter<string>();
  isShow: boolean = false;
  recipe: string = 'recipe';
  shoppingList: string = 'shopping-list';

  constructor(private router: Router) {}
  ngOnInit(): void {}

  displayOnlyRecipes() {
    this.recipeLinkClicked.emit(this.recipe);
    console.log(this.recipe);

    //return (this.displayRecipe = true);
    //this.displayShoppingList = false;
  }
  displayOnlyShoppingList() {
    this.shoppingListClicked.emit(this.shoppingList);
    console.log(this.shoppingList);
    //this.displayRecipe = false;
    //return (this.displayShoppingList = true);
  }
  toggleDisplay() {
    console.log('Button is clicked');
    this.isShow = !this.isShow;
    console.log(this.isShow);
  }
}
