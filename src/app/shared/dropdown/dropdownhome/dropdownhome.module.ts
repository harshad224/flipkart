import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownhomeComponent } from './dropdownhome.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdownhomeComponent],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdownhomeComponent]
})
export class DropdownHomeModule { }