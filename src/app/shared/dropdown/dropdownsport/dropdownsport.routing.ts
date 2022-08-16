import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from '../../productdetail/productdetail.component';
// import { SubcategoryComponent } from '../../subcategory/subcategory.component';
import { CricketComponent } from './cricket/cricket.component';
import { SportsComponent } from './sports/sports.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';

// const routes: Routes = [
//     { path: 'sports', component: SportsComponent },
//     { path: ':categorypath', component: CricketComponent,children:[ { path: ':subcategorypath', component:CricketComponent}]},
// { path: ':categorypath/:subcategorypath/:id', component:ProductdetailComponent },
// ];


const routes: Routes = [
  { path: 'sports', component: SportsComponent },
  { path: 'flipkart/:categorypath', component: CricketComponent,},
  {path: 'flipkart/:categorypath/:subcategorypath', component:CricketComponent},
{ path: 'flipkart/:categorypath/:subcategorypath/:id', component:ProductdetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DropDownSportRoutingModule { }
