import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  userr:boolean=false;
  getparams:any
  singleproductarray:any
  constructor(private router:Router,private loginSer:LoginService,private route:ActivatedRoute,private productSer:ProductsService) { }

  ngOnInit(): void {
    this.userr=this.loginSer.user?true:false

    this.getparams=this.route.snapshot.params['id']

      this.singleproductarray=this.productSer.cricketproducts.filter((data:any)=>{return data.id==this.getparams})
  }

  toBook(){
    if(this.userr){
      this.router.navigateByUrl('/book')
    }else{
      this.router.navigateByUrl('/login')
    }

  }
}
