import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from './Modules/material.module';
import { MenuComponent } from './Components/menu/menu.component';
import { AppDishdetailsComponent } from './Components/app-dishdetails/app-dishdetails.component';
import { DishService } from './Services/dish.service'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AppDishdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
