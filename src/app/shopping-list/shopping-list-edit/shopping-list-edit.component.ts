import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput?: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput?: ElementRef;
  // @Output() addButtonClicked = new EventEmitter<Ingredient>();
  @Input() ingredient: Ingredient | undefined;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.shoppingListService.addButtonClicked.emit(this.ingredient);
  }

  onButtonAddClicked(): void {
    const newIngredient = new Ingredient(
      this.nameInput?.nativeElement.value,
      this.amountInput?.nativeElement.value
    );
    this.shoppingListService.addIngredient(newIngredient);
    this.shoppingListService.addButtonClicked.emit(newIngredient);
    // this.shoppingListService.addIngredient()
    /*  const newIngredient = new Ingredient(
      this.nameInput?.nativeElement.value,
      this.amountInput?.nativeElement.value
    ); */
    //  this.addButtonClicked.emit(newIngredient);
    // console.log(this.addButtonClicked);
    //console.log(newIngredient);
  }
}
