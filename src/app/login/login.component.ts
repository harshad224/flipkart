import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginSer:LoginService) { }


  signupform:any=FormGroup
  signup:boolean=true
  errorhandler:any
  ngOnInit(): void {

    this.signupform=new FormGroup({
      'email':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
    })
  }

  toggleSignup(){
   this.signup=!this.signup
  }



  onSubmit(){

  let authobsv:Observable<AuthResponseData>

  const{email,password}=this.signupform.value

  if(this.signupform.valid){
    if(this.signup){
      authobsv=this.loginSer.onSignup(email,password)
      history.back()

    }else{
      authobsv=this.loginSer.onLogin(email,password)
      history.back()
    }
    authobsv.subscribe((data)=>{console.log(data)},(err)=>this.errorhandler=err)
  }

}



}
