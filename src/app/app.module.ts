import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomePageModule } from './homepage/homepage.module';
import { LargeModule } from './large/large.module';
import { MobileModule } from './mobile/mobile.module';
import { TravelModule } from './travel/travel.module';
import { HomeModule } from './home/home.module';
import { GroceryModule } from './grocery/grocery.module';
import { FurnitureModule } from './furniture/furniture.module';
import { FashionModule } from './fashion/fashion.module';
import { ElectronicsModule } from './electronics/electronics.module';
import { BeautyModule } from './beauty/beauty.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
