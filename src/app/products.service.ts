import { Injectable } from "@angular/core";


@Injectable()

export class ProductsService{

  cricketproducts:any=[
    {id:0,img:'../../../../assets/cricketball.png',
    name:'Sagah flicks 2 panel Cricket Leather Ball',
    quant:'Pack of 1,White',price:199,star:3,cat:'Ball'},
    {id:1,img:'../../../../assets/cricketbat.png',
    name:'Ceat Popular Willow Cricket Bat (No- 6)',
    quant:'0.900g',price:349,star:5,cat:'Bat'},
    {id:2,img:'../../../../assets/cricketkit.png',
    name:'Aurion Cricket Bag Shoulder Straps Sports Cricket Kit Bag for 2 Bat Caves with 2 pockets',
    quant:'Multicolor,Kit Bag',price:499,star:1,cat:'Kit'},
    {id:3,img:'../../../../assets/cricketgloves.png',
    name:'Sagah flicks 2 panel Cricket Leather BallJetFire Basic Youth Batting Gloves (Age Group 8-12 Year) Batting Gloves',
    quant:'Red,White',price:246,star:4,cat:'Gloves'},
  ]
  constructor(){}
}
