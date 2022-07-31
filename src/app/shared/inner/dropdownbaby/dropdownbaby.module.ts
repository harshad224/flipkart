import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownbabyComponent1 } from './dropdownbaby.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdownbabyComponent1],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdownbabyComponent1]
})
export class DropdownBabyModule1 { }
