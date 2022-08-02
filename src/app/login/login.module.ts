import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { InnerDropdownModule } from '../shared/inner/innerdropdown.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InnerDropdownModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
