import { DropdownHomeModule1 } from './dropdownhome/dropdownhome.module';
import { DropdownBabyModule1 } from './dropdownbaby/dropdownbaby.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InnerDropdownComponent } from './innerdropdown.component';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownMenModule1 } from './dropdownmen/dropdownmen.module';
import { DropdownMobileModule1 } from './dropdownmobile/dropdownmobile.module';
import { DropdownSportModule1 } from './dropdownsport/dropdownsport.module';
import { DropdownTvModule1 } from './dropdowntv/dropdowntv.module';
import { DropdownWomenModule1 } from './dropdownwomen/dropdownwomen.module';
// import { FilterDropdownDirective } from './dropdown.directive';



@NgModule({
  declarations: [InnerDropdownComponent],
  imports: [
    CommonModule,
    BrowserModule,
DropdownBabyModule1,
DropdownHomeModule1,
DropdownMenModule1,
DropdownMobileModule1,
DropdownSportModule1,
DropdownTvModule1,
DropdownWomenModule1
  ],
  exports: [  InnerDropdownComponent]
})
export class InnerDropdownModule { }
