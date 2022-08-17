import { CricketComponent } from './../../cricket/cricket.component';
import { SportsComponent } from '../../dropdown/dropdownsport/sports/sports.component';
import { ProductdetailComponent } from '../../productdetail/productdetail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryComponent } from '../../dropdown/dropdownsport/subcategory/subcategory.component';

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
export class DropDownSportRoutingModule1 { }
