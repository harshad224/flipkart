import { CricketComponent } from './../../dropdown/dropdownsport/cricket/cricket.component';
import { SportsComponent } from './../../dropdown/dropdownsport/sports/sports.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'sports', component: SportsComponent },
    { path: 'cricket', component: CricketComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DropDownSportRoutingModule1 { }
