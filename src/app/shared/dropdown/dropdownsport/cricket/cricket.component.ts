import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.scss']
})
export class CricketComponent implements OnInit {


isFourabove:boolean=false;
isThreeabove:boolean=false;
isTwoabove:boolean=false;
  filterproductsarray:any;
  cricketproductsbrand:any;
  cricketqueryname:string='';
  proarray:any;
isChecked:boolean=false;
subcatsortbyarray:any;
singlecatarray:any;
isPopularity:boolean=false;
isLowHigh:boolean=false;
isHighLow:boolean=false;
categorypath:any;
subproarray:any;

cricketpathname:string='';
subcategory:any;

brandarray:any;
reqbrand:any=[];
brandofbrand:any=[]
ratingarray:any=[]
categorypathname:any
ratingcheckboxarray=[{rate:4},{rate:3},{rating:2}]

  constructor(private productSer:ProductsService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {


    this.productSer.getBrands().subscribe((data)=>{
this.brandarray=data;
    });
    this.cricketqueryname=this.route.snapshot.queryParams['category'];
    this.cricketpathname=this.route.snapshot.params['subcategorypath'];
    this.categorypathname=this.route.snapshot.params['categorypath'];

    this.route.queryParams.subscribe((params:Params)=>{
       this.cricketqueryname=params['category'];
    });

    this.route.params.subscribe((params:Params)=>{
       this.cricketpathname=params['subcategorypath'];
    });

    this.route.params.subscribe((params:Params)=>{
      this.categorypathname=params['categorypath'];
   });

   console.log(this.cricketqueryname)
   console.log(this.categorypathname)
   console.log(this.cricketpathname)

    if(this.cricketqueryname){
       this.productSer.getSubProducts(this.categorypathname,this.cricketpathname,this.isChecked, this.ratingarray,this.brandofbrand).subscribe((data)=>{this.subproarray=data;console.log("subcatarray"+data);});
       console.log('Pawar');
    }else{
      // this.productSer.getProducts(this.isChecked, this.isFourabove, this.isThreeabove,this.isTwoabove,this.brandofbrand).subscribe((data)=>{this.filterproductsarray=data;console.log(data);});
      this.productSer.getProducts(this.categorypathname,this.isChecked, this.ratingarray,this.brandofbrand).subscribe((data)=>{this.filterproductsarray=data;console.log(data);});
    }


    this.singlecatarray=this.productSer.subcategoryarray;



   }







   toSubCategory(path:string,subcategoryname:string){

     this.router.navigate([path],{relativeTo:this.route,queryParams:{category:subcategoryname}});

     this.cricketqueryname=subcategoryname;
     this.cricketpathname=path;


     console.log("subcategory",this.cricketqueryname)
     console.log("subcategory",this.categorypathname)
     console.log("subcategory",this.cricketpathname)

      if(this.cricketpathname){
        this.productSer.getSubProducts(this.categorypathname, this.cricketpathname,this.isChecked, this.ratingarray,this.brandofbrand).subscribe((data)=>{this.subproarray=data;console.log(data);});

        console.log('Harshad');
      }

    }

    brands(event:any){

  if(event.target.checked){
  this.brandofbrand.push(event.target.value)
  }else if(!event.target.checked){
   let contain=this.brandofbrand.includes(event.target.value)
   if(contain){
     let index=this.brandofbrand.indexOf(event.target.value)
     this.brandofbrand.splice(index,1)
   }
  }

  if(!this.cricketqueryname){
    this.productSer.getProducts(this.categorypathname,this.isChecked, this.ratingarray,this.brandofbrand).subscribe((data)=>{this.filterproductsarray=data;console.log(data);});
   }else{
   this.productSer.getSubProducts(this.categorypathname, this.cricketpathname,this.isChecked, this.ratingarray,this.brandofbrand).subscribe((data)=>{this.subproarray=data;console.log(data);});

   }

  }


  rating(event:any){
    if(event.target.checked){
      this.ratingarray.push(+event.target.value)
      }else if(!event.target.checked){
        let contain=this.ratingarray.includes(+event.target.value)
        if(contain){
          let index=this.ratingarray.indexOf(+event.target.value)
          this.ratingarray.splice(index,1)
        }
      }

      if(!this.cricketqueryname){
        this.productSer.getProducts(this.categorypathname,this.isChecked, this.ratingarray,this.brandofbrand).subscribe((data)=>{this.filterproductsarray=data;console.log(data);});
       }else{
       this.productSer.getSubProducts(this.categorypathname, this.cricketpathname,this.isChecked, this.ratingarray,this.brandofbrand).subscribe((data)=>{this.subproarray=data;console.log(data);});

       }
  }

   assurance(){

    this.isChecked=!this.isChecked;

   if(!this.cricketqueryname){
    this.productSer.getProducts(this.categorypathname,this.isChecked, this.ratingarray,this.brandofbrand).subscribe((data)=>{this.filterproductsarray=data;console.log(data);});
   }else{
   this.productSer.getSubProducts(this.categorypathname, this.cricketpathname,this.isChecked, this.ratingarray,this.brandofbrand).subscribe((data)=>{this.subproarray=data;console.log(data);});

   }

 }


popularity(){
  if(!this.cricketqueryname){
    this.filterproductsarray=this.filterproductsarray.sort((a:any,b:any)=>{return b.rating-a.rating;});
  }else{
    this.subproarray=this.subproarray.sort((a:any,b:any)=>{return b.rating-a.rating;});
  }
 }

 lowhighs(){
  if(!this.cricketqueryname){
  this.filterproductsarray=this.filterproductsarray.sort((a:any,b:any)=>{return a.price-b.price;});
  }else{
  this.subproarray=this.subproarray.sort((a:any,b:any)=>{return a.price-b.price;});
  }
 }

 highlows(){
  if(!this.cricketqueryname){
  this.filterproductsarray=this.filterproductsarray.sort((a:any,b:any)=>{return b.price-a.price;});
  }else{
  this.subproarray=this.subproarray.sort((a:any,b:any)=>{return b.price-a.price;});
  }
 }



}

