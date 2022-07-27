import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownmenComponent } from './dropdownmen.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [DropdownmenComponent],
    imports: [
        CommonModule, BrowserModule
    ],
    exports: [DropdownmenComponent]
})
export class DropdownMenModule { }