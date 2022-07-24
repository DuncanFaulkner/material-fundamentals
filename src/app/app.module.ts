import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const APPMODULES = [BrowserAnimationsModule, AppRoutingModule];

const MATERIALMODULES = [MatButtonModule];
@NgModule({
  declarations: [AppComponent],
  imports: [APPMODULES, MATERIALMODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
