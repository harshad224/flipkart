import { LoginGuard } from './../../login/login.guard';
import { BookComponent } from './../../book/book.component';
import { LoginComponent } from './../../login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'book', component:BookComponent ,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductDetailRoutingModule { }
