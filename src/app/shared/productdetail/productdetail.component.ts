import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  userr:boolean=false;
  constructor(private router:Router,private loginSer:LoginService) { }

  ngOnInit(): void {
    this.userr=this.loginSer.user?true:false
    console.log(this.userr)
  }

  toBook(){
    if(this.userr){
      this.router.navigateByUrl('/book')
    }else{
      this.router.navigateByUrl('/login')
    }

  }
}
