import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdowntvComponent1 } from './dropdowntv.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdowntvComponent1],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdowntvComponent1]
})
export class DropdownTvModule1 { }
