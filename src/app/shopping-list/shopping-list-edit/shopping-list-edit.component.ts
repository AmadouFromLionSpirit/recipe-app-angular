import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput', { static: true }) nameInput?: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput?: ElementRef;
  @Output() addButtonClicked = new EventEmitter<Ingredient>();

  onButtonAddClicked(): void {
    const newIngredient = new Ingredient(
      this.nameInput?.nativeElement.value,
      this.amountInput?.nativeElement.value
    );
    this.addButtonClicked.emit(newIngredient);

    console.log(this.addButtonClicked);
    console.log(newIngredient);
  }
}
