import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { IconService } from './mat-icon/icon.service';
import { MatIconComponent } from './mat-icon/mat-icon.component';

const routes: Routes = [
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'mat-icon', component: MatIconComponent },
];

const ANGULARMODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild(routes),
  HttpClientModule,
];
const MATERIALMODULES = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule,
];

const PROVIDERS = [MatIconRegistry, IconService];

@NgModule({
  declarations: [AutoCompleteComponent, MatIconComponent],
  imports: [ANGULARMODULES, MATERIALMODULES],
  exports: [RouterModule],
  providers: [PROVIDERS],
})
export class FormControlsModule {}
