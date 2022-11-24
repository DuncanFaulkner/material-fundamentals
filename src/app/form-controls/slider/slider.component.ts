import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // version 15
  formatLabel = (value: number) => {
    return value + 'k';
  };

  // version 14
  // formatLabel = (value: number) => {
  //   return value + 'k';
  // };

  // onInputChange(event: MatSliderChange) {
  //   console.log('onInputChange', event.value);
  // }

  // onChange(event: MatSliderChange) {
  //   console.log('onChange', event.value);
  // }
}
