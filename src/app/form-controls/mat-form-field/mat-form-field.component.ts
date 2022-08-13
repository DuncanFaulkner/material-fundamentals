import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-form-field',
  templateUrl: './mat-form-field.component.html',
  styleUrls: ['./mat-form-field.component.scss'],
})
export class MatFormFieldComponent implements OnInit {
  protected hide: boolean = false;
  protected name = new FormControl('', [
    Validators.required,
    Validators.maxLength(6),
  ]);

  constructor() {}

  ngOnInit(): void {}
}
