import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductdetailComponent } from './productdetail.component';
import { InnerDropdownModule } from '../inner/innerdropdown.module';



@NgModule({
  declarations: [ProductdetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    InnerDropdownModule
  ],
  exports: [ProductdetailComponent]
})
export class ProductDetailModule { }
