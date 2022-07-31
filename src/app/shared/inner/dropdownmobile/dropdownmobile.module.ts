import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownmobileComponent1 } from './dropdownmobile.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdownmobileComponent1],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdownmobileComponent1]
})
export class DropdownMobileModule1 { }
