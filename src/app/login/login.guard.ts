import { LoginService } from './login.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, tap,} from "rxjs";



@Injectable()

export class LoginGuard implements CanActivate{
  constructor(private loginSer:LoginService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.loginSer.user
      .pipe(
      map(user=>{
        const isAuth=user?true:false;
      if(isAuth){
        return true;
      }else{
        return this.router.createUrlTree(['/login'])
      }

      }),
    )
  }
}
