import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.scss']
})
export class CricketComponent implements OnInit {

  cricketproducts:any;

  @ViewChild('rangeval') myrange:any
// low:boolean=false;
// high:boolean=false
//   popular:any;
  // lowhigh:any;
  // highlow:any

  myrangeval:number=1000


  constructor(private productSer:ProductsService) { }

  ngOnInit(): void {
    this.cricketproducts=this.productSer.cricketproducts
  }

  selectOptions(){
    console.log(this.myrange[0])

  }
  popularity(){
  return   this.cricketproducts.sort((a:any,b:any)=>{return b.star - a.star})
 }

 lowhighs(){
  return this.cricketproducts.sort((a:any,b:any)=>{return a.price - b.price})
 }

 highlows(){
  return this.cricketproducts.sort((a:any,b:any)=>{return b.price - a.price})
 }


}

