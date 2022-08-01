import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from '../../productdetail/productdetail.component';
import { CricketComponent } from './cricket/cricket.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
    { path: 'sports', component: SportsComponent },
    { path: 'cricket', component: CricketComponent },
    { path: 'cricket/:id', component:ProductdetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DropDownSportRoutingModule { }
