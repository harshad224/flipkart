import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthResponseData, LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  // private subscriptions = new Subscription();

  constructor(private loginSer:LoginService,private productSer:ProductsService) { }


  signupform:any=FormGroup
  signup:boolean=true
  errorhandler:any
  ngOnInit(): void {

    this.signupform=new FormGroup({
      'email':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required),
    })


    const a=new Promise((resolve,reject)=>{
      resolve(console.log('Data received successfully'))
    })
    // .then(()=>console.log('data'))
    // .catch(()=>console.log('error'))

// this.subscriptions=this.productSer.obsv.subscribe((data)=>{console.log(data)})

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

    }else{
      authobsv=this.loginSer.onLogin(email,password)
    }
    authobsv.subscribe((data)=>{console.log(data);history.back()},(err)=>this.errorhandler=err)
  }

}

// ngOnDestroy(): void {
//     this.subscriptions.unsubscribe()
// }



}
