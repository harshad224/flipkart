import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownmenComponent1 } from './dropdownmen.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdownmenComponent1],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdownmenComponent1]
})
export class DropdownMenModule1 { }
