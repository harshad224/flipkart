import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdowntvComponent } from './dropdowntv.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdowntvComponent],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdowntvComponent]
})
export class DropdownTvModule { }