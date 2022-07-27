import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownsportComponent } from './dropdownsport.component';
import { BrowserModule } from '@angular/platform-browser';
import { SportsComponent } from './sports/sports.component';
import { DropDownRoutingModule } from './dropdownsport.routing';
import { CricketComponent } from './cricket/cricket.component';



@NgModule({
    declarations: [DropdownsportComponent, SportsComponent, CricketComponent],
    imports: [
        CommonModule, BrowserModule, DropDownRoutingModule
    ],
    exports: [DropdownsportComponent]
})
export class DropdownSportModule { }