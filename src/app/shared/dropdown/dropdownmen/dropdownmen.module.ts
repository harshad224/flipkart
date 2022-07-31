import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownmenComponent } from './dropdownmen.component';
import { BrowserModule } from '@angular/platform-browser';
import { FootwearComponent } from './footwear/footwear.component';
import { SportshoesComponent } from './sportshoes/sportshoes.component';
import { DropDownMenRoutingModule } from './dropdownmen.routing';
import { CasualshoesComponent } from './casualshoes/casualshoes.component';
import { FormalshoesComponent } from './formalshoes/formalshoes.component';
import { SandalsfloaterComponent } from './sandalsfloater/sandalsfloater.component';
import { FlipflopsComponent } from './flipflops/flipflops.component';
import { LoaferComponent } from './loafer/loafer.component';
import { MensgroomingComponent } from './mensgrooming/mensgrooming.component';
import { DeodrantsComponent } from './deodrants/deodrants.component';
import { MenperfumeComponent } from './menperfume/menperfume.component';
import { BedcaregroomingComponent } from './bedcaregrooming/bedcaregrooming.component';
import { ShavingaftershaveComponent } from './shavingaftershave/shavingaftershave.component';



@NgModule({
    declarations: [DropdownmenComponent, FootwearComponent, SportshoesComponent, CasualshoesComponent, FormalshoesComponent, SandalsfloaterComponent, FlipflopsComponent, LoaferComponent, MensgroomingComponent, DeodrantsComponent, MenperfumeComponent, BedcaregroomingComponent, ShavingaftershaveComponent],
    imports: [
        CommonModule, BrowserModule, DropDownMenRoutingModule
    ],
    exports: [DropdownmenComponent]
})
export class DropdownMenModule { }