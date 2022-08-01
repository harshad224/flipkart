import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownsportComponent } from './dropdownsport.component';
import { BrowserModule } from '@angular/platform-browser';
import { SportsComponent } from './sports/sports.component';
import { DropDownSportRoutingModule } from './dropdownsport.routing';
import { CricketComponent } from './cricket/cricket.component';
import { FilterDropdownDirective } from './dropdown.directive';
import { InnerDropdownModule } from '../../inner/innerdropdown.module';
import { ProductDetailModule } from '../../productdetail/productdetail.module';
import { ProductNamePipe } from './productname.pipe';



@NgModule({
    declarations: [DropdownsportComponent, SportsComponent, CricketComponent,FilterDropdownDirective,ProductNamePipe],
    imports: [
        CommonModule, BrowserModule, DropDownSportRoutingModule,InnerDropdownModule,ProductDetailModule
    ],
    exports: [DropdownsportComponent,FilterDropdownDirective,ProductNamePipe]
})
export class DropdownSportModule { }
