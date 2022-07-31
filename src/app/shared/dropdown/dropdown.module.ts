import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownBabyModule } from './dropdownbaby/dropdownbaby.module';
import { DropdownHomeModule } from './dropdownhome/dropdownhome.module';
import { DropdownMenModule } from './dropdownmen/dropdownmen.module';
import { DropdownMobileModule } from './dropdownmobile/dropdownmobile.module';
import { DropdownSportModule } from './dropdownsport/dropdownsport.module';
import { DropdownTvModule } from './dropdowntv/dropdowntv.module';
import { DropdownWomenModule } from './dropdownwomen/dropdownwomen.module';
import { BrowserModule } from '@angular/platform-browser';
// import { FilterDropdownDirective } from './dropdown.directive';



@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    DropdownBabyModule,
    DropdownHomeModule,
    DropdownMenModule,
    DropdownMobileModule,
    DropdownSportModule,
    DropdownTvModule,
    DropdownWomenModule,
    BrowserModule,
  ],
  exports: [DropdownComponent]
})
export class DropdownModule { }
