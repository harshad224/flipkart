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
  getidparams:any
  getpathparams:any
  constructor(private router:Router,private loginSer:LoginService,private route:ActivatedRoute,private productSer:ProductsService) { }

  ngOnInit(): void {
    this.userr=this.loginSer.user?true:false

    this.getidparams=this.route.snapshot.params['id']
    this.getpathparams=this.route.snapshot.params['categorypath']


    this.productSer.getsingleProducts(this.getpathparams,this.getidparams).subscribe((data:any)=>{

this.singleproductarray=[data]
      })

      console.log(this.singleproductarray)
  }

  toBook(){
    if(this.userr){
      this.router.navigateByUrl('/book')
    }else{
      this.router.navigateByUrl('/login')
    }

  }
}
