import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

// subscription=new Subscription()

  constructor(private productSer:ProductsService) { }

  ngOnInit(): void {
    // this.a=this.productSer.obsv

    // this.subscription=this.productSer.obsv.subscribe((data:any)=>{console.log(data)})

    // this.productSer.obsv.subscribe((data:any)=>{console.log(data)})
  }

//   ngOnDestroy(): void {
//     this.subscription.unsubscribe()
// }


}
