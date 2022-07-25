import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryComponent } from './grocery.component';


const routes: Routes = [
    { path: 'grocery', component: GroceryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class GroceryRoutingModule { }