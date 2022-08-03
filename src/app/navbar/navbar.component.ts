import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy {

  authenticated:boolean=false

  private userSub:any;

  constructor(private loginSer:LoginService,private router:Router) {
    this.userSub=this.loginSer.user.subscribe(user=>{
      this.authenticated=!!user
          })
  }


  ngOnInit(): void {

  }

  logout(){
    this.loginSer.onLogout()
    localStorage.removeItem('userData')
 this.router.navigateByUrl('/homepage')
  }

  ngOnDestroy(): void {
      this.userSub.unsubscribe()
  }

}
