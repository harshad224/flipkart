import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownsportComponent1 } from './dropdownsport.component';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownSportRoutingModule1 } from './dropdownsport.routing';
import { FilterDropdownDirective } from './dropdown.directive';



@NgModule({
    declarations: [DropdownsportComponent1,FilterDropdownDirective],
    imports: [
        CommonModule, BrowserModule, DropDownSportRoutingModule1
    ],
    exports: [DropdownsportComponent1,FilterDropdownDirective]
})
export class DropdownSportModule1 { }
