import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MatFormFieldComponent } from './mat-form-field/mat-form-field.component';
import { IconService } from './mat-icon/icon.service';
import { MatIconComponent } from './mat-icon/mat-icon.component';
import { MatTableComponent } from './mat-table/mat-table.component';

const routes: Routes = [
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'mat-icon', component: MatIconComponent },
  { path: 'mat-form-field', component: MatFormFieldComponent },
  { path: 'mat-table', component: MatTableComponent },
];

const OPTIONS = {
  appearance: 'outline',
  floatLabel: 'auto',
  hideRequiredMarker: true,
  color: 'warn',
};

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
  MatCardModule,
  MatSelectModule,
  MatTableModule,
  DragDropModule,
];

const PROVIDERS = [
  MatIconRegistry,
  IconService,
  // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { ...OPTIONS } },
];

@NgModule({
  declarations: [
    AutoCompleteComponent,
    MatIconComponent,
    MatFormFieldComponent,
    MatTableComponent,
  ],
  imports: [ANGULARMODULES, MATERIALMODULES],
  exports: [RouterModule],
  providers: [PROVIDERS],
})
export class FormControlsModule {}
