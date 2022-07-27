import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownwomenComponent } from './dropdownwomen.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdownwomenComponent],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdownwomenComponent]
})
export class DropdownWomenModule { }