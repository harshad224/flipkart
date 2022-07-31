import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownhomeComponent1 } from './dropdownhome.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdownhomeComponent1],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdownhomeComponent1]
})
export class DropdownHomeModule1 { }
