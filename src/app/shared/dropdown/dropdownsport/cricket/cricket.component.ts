import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.scss']
})
export class CricketComponent implements OnInit {

  cricketproducts:any=[
    {id:0,img:'../../../../assets/cricketball.png',name:'Sagah flicks 2 panel Cricket Leather Ball',quant:'Pack of 1,White',price:199,star:3},
    {id:1,img:'../../../../assets/cricketbat.png',name:'Ceat Popular Willow Cricket Bat (No- 6)',quant:'0.900g',price:349,star:5},
    {id:2,img:'../../../../assets/cricketkit.png',name:'Aurion Cricket Bag Shoulder Straps Sports Cricket Kit Bag for 2 Bat Caves with 2 pockets',quant:'Multicolor,Kit Bag',price:499,star:1},
    {id:3,img:'../../../../assets/cricketgloves.png',name:'Sagah flicks 2 panel Cricket Leather BallJetFire Basic Youth Batting Gloves (Age Group 8-12 Year) Batting Gloves',quant:'Red,White',price:246,star:4},
  ]

  @ViewChild('rangeval') myrange:any
// low:boolean=false;
// high:boolean=false
//   popular:any;
  // lowhigh:any;
  // highlow:any

  myrangeval:number=1000


  constructor() { }

  ngOnInit(): void {
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

