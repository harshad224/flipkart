import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownsportComponent1 } from './dropdownsport.component';
import { BrowserModule } from '@angular/platform-browser';
import { SportsComponent } from './sports/sports.component';
import { DropDownSportRoutingModule1 } from './dropdownsport.routing';
import { CricketComponent } from './cricket/cricket.component';
import { FilterDropdownDirective } from './dropdown.directive';



@NgModule({
    declarations: [DropdownsportComponent1, SportsComponent, CricketComponent,FilterDropdownDirective],
    imports: [
        CommonModule, BrowserModule, DropDownSportRoutingModule1
    ],
    exports: [DropdownsportComponent1,FilterDropdownDirective]
})
export class DropdownSportModule1 { }
