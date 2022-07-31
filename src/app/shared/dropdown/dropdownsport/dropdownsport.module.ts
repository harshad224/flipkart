import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownsportComponent } from './dropdownsport.component';
import { BrowserModule } from '@angular/platform-browser';
import { SportsComponent } from './sports/sports.component';
import { DropDownSportRoutingModule } from './dropdownsport.routing';
import { CricketComponent } from './cricket/cricket.component';
import { FilterDropdownDirective } from './dropdown.directive';



@NgModule({
    declarations: [DropdownsportComponent, SportsComponent, CricketComponent,FilterDropdownDirective],
    imports: [
        CommonModule, BrowserModule, DropDownSportRoutingModule
    ],
    exports: [DropdownsportComponent,FilterDropdownDirective]
})
export class DropdownSportModule { }
