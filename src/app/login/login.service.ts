import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, throwError } from 'rxjs';


@Injectable({providedIn:'root'})

export class LoginService{
  constructor(private http:HttpClient ){}


  onSignup(email:string,password:string){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6tAUW9ho2Lgi9OvfO0ug-U_7erWVK29o',
    {email,
    password,
 returnSecureToken:true}).pipe(catchError(this.handleError))
  }

onLogin(email:string,password:string){
  return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6tAUW9ho2Lgi9OvfO0ug-U_7erWVK29o',
  {email,
  password,
returnSecureToken:true}).pipe(catchError(this.handleError))
}

private handleError(err:HttpErrorResponse){

  let errorMessage="An unknown error occurred"

  if(!err.error || !err.error.error){
    return throwError(errorMessage);
  }
switch(err.error.error.message){
case 'INVALID_PASSWORD':
  errorMessage='Please enter valid password';
  break;
case 'EMAIL_NOT_FOUND':
  errorMessage='Email doesn\'t exists.'
  break;
case 'USER_DISABLED':
  errorMessage='The user account has been disabled by an administrator.'
  break;
case 'EMAIL_EXISTS':
    errorMessage='The email address is already in use by another account.';
    break;
case 'OPERATION_NOT_ALLOWED':
      errorMessage='Password sign-in is disabled for this project.';
break;
case 'TOO_MANY_ATTEMPTS_TRY_LATER':
  errorMessage='We have blocked all requests from this device due to unusual activity. Try again later.'

}
return throwError(errorMessage)
}
}


