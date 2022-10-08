import { Component } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatRadioChange } from '@angular/material/radio';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

export interface Recipe {
  name: string;
  completed: boolean;
  ingredients?: Recipe[];
}

const OPTIONS = {
  appearance: 'outline',
  floatLabel: 'auto',
  hideRequiredMarker: false,
};

@Component({
  selector: 'app-simple-controls',
  templateUrl: './simple-controls.component.html',
  styleUrls: ['./simple-controls.component.scss'],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: OPTIONS }],
})
export class SimpleControlsComponent {
  // used in checkbox sample
  recipe: Recipe = {
    name: 'Ingredients',
    completed: false,
    ingredients: [
      { name: 'Flour', completed: false },
      { name: 'Eggs', completed: false },
      { name: 'Butter', completed: false },
    ],
  };
  allIngredientsAdded: boolean | undefined = false;
  allComplete(): void {
    this.allIngredientsAdded =
      this.recipe.ingredients !== null &&
      this.recipe.ingredients?.every((t) => t.completed);
  }
  inComplete(): boolean {
    return this.recipe.ingredients !== null && !this.allIngredientsAdded;
  }
  selectAll(completed: boolean): void {
    this.allIngredientsAdded = completed;
    this.recipe.ingredients !== null &&
      this.recipe.ingredients?.forEach((t) => (t.completed = completed));
  }
  // inputs;
  onChange(event: MatRadioChange): void {
    console.log({ event });
  }

  onToggleChange(event: MatSlideToggleChange) {
    console.log(event.checked);
  }
}
