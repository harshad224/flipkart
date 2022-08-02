import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  user = new BehaviorSubject<User | null>(null);

  tokenExpirationTimer:any;
  constructor(private http: HttpClient) {}

  onSignup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIkey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((resdata) => {
          this.handleAuthentication(resdata);
        })
      );
  }

  onLogin(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIkey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((resdata) => {
          this.handleAuthentication(resdata);
        })
      );
  }


  onLogout(){
    this.user.next(null)

    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer)
    }
    this.tokenExpirationTimer=null
  }


  autoLogout(expirationDuration:number){
    this.tokenExpirationTimer=setTimeout(
      ()=>{
        this.onLogout()
      },expirationDuration
    )
  }


  autoLogin(){
    const userData:{email:string,id:string,_token:string,_tokenExpirationDate:string}=JSON.parse(localStorage.getItem('userData') || '');

    if(!userData){
      return;
    }
    const {email,id,_token,_tokenExpirationDate}=userData
    const loadedUser=new User(email,id,_token,new Date(_tokenExpirationDate))

    if(loadedUser.token){
      this.user.next(loadedUser)
      const expirationDuration=new Date(userData._tokenExpirationDate).getTime()-new Date().getTime()
      this.autoLogout(expirationDuration)
    }

  }


  private handleAuthentication(resdata: AuthResponseData) {
    const { email, localId, idToken, expiresIn } = resdata;

    const newExpirationDate = new Date(
      new Date().getTime() + +expiresIn * 1000
    );

    const newUser = new User(email, localId, idToken, newExpirationDate);
    this.user.next(newUser);
    this.autoLogout(+expiresIn*1000)
    localStorage.setItem('userData',JSON.stringify(newUser))
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';

    if (!err.error || !err.error.error) {
      return throwError(errorMessage);
    }
    switch (err.error.error.message) {
      case 'INVALID_PASSWORD':
        errorMessage = 'Please enter valid password';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "Email doesn't exists.";
        break;
      case 'USER_DISABLED':
        errorMessage =
          'The user account has been disabled by an administrator.';
        break;
      case 'EMAIL_EXISTS':
        errorMessage =
          'The email address is already in use by another account.';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage =
          'We have blocked all requests from this device due to unusual activity. Try again later.';
    }
    return throwError(errorMessage);
  }
}
