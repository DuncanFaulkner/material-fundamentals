import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from './enum';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  get path(): string {
    return './assets/images';
  }

  registerIcons(): void {
    this.load(Icons);
  }

  private load(icons: typeof Icons): void {
    Object.keys(icons).forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${this.path}/${icon}.svg`
        )
      );
    });
  }
}
