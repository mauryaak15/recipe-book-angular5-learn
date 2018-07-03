import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  id: number;
  editSubscription: Subscription;
  editMode = false;
  editedItem: Ingredient;
  @ViewChild('shoppingListForm') ShoppingListForm: NgForm;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscription = this.slService.startEditing.subscribe((id: number) => {
      this.editMode = true;
      this.id = id;
      this.editedItem = this.slService.getEditedItem(id);
      this.ShoppingListForm.setValue({
        'name': this.editedItem.name,
        'amount': this.editedItem.amount
      });
    });
  }

  onAdd(shoppingListForm: NgForm) {
    if (shoppingListForm.value.name && shoppingListForm.value.amount) {
      const name = shoppingListForm.value.name;
      const amount = shoppingListForm.value.amount;
      const newIngredient = new Ingredient(name, amount);
      if (this.editMode) {
        this.slService.updateIngredient(newIngredient, this.id);
      }else {
        this.slService.addIngredient(newIngredient);
      }
    }
    this.onClear();
  }

  onClear() {
    this.ShoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.id);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

}
