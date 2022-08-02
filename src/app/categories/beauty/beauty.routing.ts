import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeautyComponent } from './beauty.component';


const routes: Routes = [
    { path: 'beauty', component: BeautyComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BeautyRoutingModule { }