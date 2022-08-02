import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomePageModule } from './homepage/homepage.module';
import { LargeModule } from './categories/large/large.module';
import { MobileModule } from './categories/mobile/mobile.module';
import { TravelModule } from './categories/travel/travel.module';
import { HomeModule } from './categories/home/home.module';
import { GroceryModule } from './categories/grocery/grocery.module';
import { FurnitureModule } from './categories/furniture/furniture.module';
import { FashionModule } from './categories/fashion/fashion.module';
import { ElectronicsModule } from './categories/electronics/electronics.module';
import { BeautyModule } from './categories/beauty/beauty.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    LargeModule,
    MobileModule,
    TravelModule,
    HomeModule,
    GroceryModule,
    FurnitureModule,
    FashionModule,
    ElectronicsModule,
    BeautyModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
