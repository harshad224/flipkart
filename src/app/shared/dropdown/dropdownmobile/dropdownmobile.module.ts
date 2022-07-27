import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownmobileComponent } from './dropdownmobile.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdownmobileComponent],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdownmobileComponent]
})
export class DropdownMobileModule { }