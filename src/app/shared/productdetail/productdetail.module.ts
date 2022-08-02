import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductdetailComponent } from './productdetail.component';
import { InnerDropdownModule } from '../inner/innerdropdown.module';
// import { ProductDetailRoutingModule } from './productdetail.routing.module';



@NgModule({
  declarations: [ProductdetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    InnerDropdownModule,
    // ProductDetailRoutingModule
  ],
  exports: [ProductdetailComponent]
})
export class ProductDetailModule { }
