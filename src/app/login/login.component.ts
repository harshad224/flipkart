import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

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
      // 'loginemail':new FormControl(null,Validators.required),
      // 'loginpassword':new FormControl(null,Validators.required),
    })
  }

  toggleSignup(){
this.signup=!this.signup
  }
onSubmit(){

  const{email,password}=this.signupform.value
  if(this.signup){
    this.loginSer.onSignup(email,password).subscribe((data)=>{console.log(data)})
  }
  this.loginSer.onLogin(email,password).subscribe((data)=>{console.log(data)},(err)=>this.errorhandler=err)
}

}
