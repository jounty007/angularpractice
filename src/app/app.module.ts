import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertListComponent } from './property/propert-list/propert-list.component';
import { NavBarComponent } from './property/nav-bar/nav-bar.component';
 

@NgModule({
  declarations: [
    AppComponent, 
    PropertyCardComponent,
    PropertListComponent,
    NavBarComponent 
 

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
