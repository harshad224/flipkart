import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductdetailComponent } from './productdetail.component';
import { InnerDropdownModule } from '../inner/innerdropdown.module';
import { LoginModule } from 'src/app/login/login.module';
import { BookModule } from 'src/app/book/book.module';
import { ProductDetailRoutingModule } from './productdetail.routing.module';



@NgModule({
  declarations: [ProductdetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    InnerDropdownModule,
    LoginModule,
    BookModule,
    ProductDetailRoutingModule
  ],
  exports: [ProductdetailComponent]
})
export class ProductDetailModule { }
