import { ProductsService } from './../../../../../flipkart copy/src/app/products.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CricketComponent } from './cricket.component';
import { CategoryRoutingModule } from './cricket.routing';
// import { DropdownMenModule } from '../dropdown/dropdownmen/dropdownmen.module';
import { InnerDropdownModule } from '../inner/innerdropdown.module';





@NgModule({
    declarations: [CricketComponent],
    imports: [
        CommonModule, BrowserModule,RouterModule,CategoryRoutingModule,InnerDropdownModule
    ],
    exports: [],
    providers:[ProductsService]
})
export class CricketModule { }
