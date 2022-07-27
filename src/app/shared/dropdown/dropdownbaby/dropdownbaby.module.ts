import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownbabyComponent } from './dropdownbaby.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdownbabyComponent],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdownbabyComponent]
})
export class DropdownBabyModule { }