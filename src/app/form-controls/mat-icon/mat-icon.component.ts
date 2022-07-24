import { Component } from '@angular/core';
import { IconService } from './icon.service';

@Component({
  selector: 'app-mat-icon',
  templateUrl: './mat-icon.component.html',
  styleUrls: ['./mat-icon.component.scss'],
})
export class MatIconComponent {
  constructor(private iconService: IconService) {
    this.iconService.registerIcons();
  }
}
