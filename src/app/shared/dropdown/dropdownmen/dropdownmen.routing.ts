import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedcaregroomingComponent } from './bedcaregrooming/bedcaregrooming.component';
import { CasualshoesComponent } from './casualshoes/casualshoes.component';
import { DeodrantsComponent } from './deodrants/deodrants.component';
import { FlipflopsComponent } from './flipflops/flipflops.component';
import { FootwearComponent } from './footwear/footwear.component';
import { FormalshoesComponent } from './formalshoes/formalshoes.component';
import { LoaferComponent } from './loafer/loafer.component';
import { MenperfumeComponent } from './menperfume/menperfume.component';
import { MensgroomingComponent } from './mensgrooming/mensgrooming.component';
import { SandalsfloaterComponent } from './sandalsfloater/sandalsfloater.component';
import { ShavingaftershaveComponent } from './shavingaftershave/shavingaftershave.component';
import { SportshoesComponent } from './sportshoes/sportshoes.component';


const routes: Routes = [
{path:'footwear', component:FootwearComponent},
{path:'sportshoes', component:SportshoesComponent},
{path: 'casualshoes', component: CasualshoesComponent},
{path: 'formalshoes', component: FormalshoesComponent},
{path: 'sandals&floater', component: SandalsfloaterComponent},
{path: 'flipflops', component: FlipflopsComponent},
{path: 'loafer', component: LoaferComponent},
{path: 'mensgrooming', component: MensgroomingComponent},
{path:'deodrants', component: DeodrantsComponent},
{path: 'menperfume', component: MenperfumeComponent},
{path:'menperfume', component: MenperfumeComponent},
{path:'bedcaregrooming', component: BedcaregroomingComponent},
{path:'shavingaftershave', component: ShavingaftershaveComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DropDownMenRoutingModule { }