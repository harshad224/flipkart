import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LargeComponent } from './large.component';


const routes: Routes = [
    { path: 'large', component: LargeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LargeRoutingModule { }
