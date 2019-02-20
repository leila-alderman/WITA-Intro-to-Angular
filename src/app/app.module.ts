import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkService } from './service/drink.service';

@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DrinkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
