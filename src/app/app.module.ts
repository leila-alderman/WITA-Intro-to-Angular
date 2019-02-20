import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkService } from './service/drink.service.ts';

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DrinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
