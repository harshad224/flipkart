import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";


@Injectable()

export class ProductsService{

  subCat=new Subject();
params:any;
isPopularity=new BehaviorSubject<boolean>(false);
isLowHigh=new BehaviorSubject<boolean>(false);
isHighLow=new BehaviorSubject<boolean>(false);
subcategory=new BehaviorSubject<string | null>(null);
subcategorysubject=new BehaviorSubject<any>(null);
assured:any;
isFour:any;
isThree:any;
isTwo:any;


  subcategoryarray:any=[
    {id:0,category:'cricket',subcategory:'Cricket Ball',path:'cricketball'},
    {id:1,category:'cricket',subcategory:'Cricket Bat',path:'cricketbat'},
    {id:2,category:'cricket',subcategory:'Cricket Kit',path:'cricketkit'},
    {id:3,category:'cricket',subcategory:'Cricket Gloves',path:'cricketgloves'}
  ];

  constructor(private http:HttpClient){

  }


  getBrand(brand:any){

    const assuredcategoryparams=new HttpParams().set('brandlist',brand)
    return this.http.get('http://localhost:3000/brandlist',{params:assuredcategoryparams})


  }

  getBrands(){

    return this.http.get('http://localhost:3000/brand')
  }

  getsingleProducts(path:string,id:any){
    return this.http.get(`http://localhost:3000/cricket/${path}/${id}`)
  }

    getProducts(category:string,assured?:boolean,rating?:string,brand?:string){

      if(category && brand && assured && rating){
        const assuredcategoryparams=new HttpParams().set('brandlist',brand).set('assured',true).set('rating',rating)
        // console.log(notassuredparams)
        return this.http.get(`http://localhost:3000/${category}`,{params:assuredcategoryparams});
      }
      else if(category && !brand && assured && rating){
        const assuredcategoryparams=new HttpParams().set('assured',true).set('rating',rating)
        // console.log(notassuredparams)
        return this.http.get(`http://localhost:3000/${category}`,{params:assuredcategoryparams});
      }
      else if(category && brand && !assured && rating){
        const assuredcategoryparams=new HttpParams().set('brandlist',brand).set('rating',rating)
        // console.log(notassuredparams)
        return this.http.get(`http://localhost:3000/${category}`,{params:assuredcategoryparams});
      }
      else if(category && brand && assured && !rating){
        const assuredcategoryparams=new HttpParams().set('brandlist',brand).set('assured',true)
        // console.log(notassuredparams)
        return this.http.get(`http://localhost:3000/${category}`,{params:assuredcategoryparams});
      }
      else if(category && !brand && !assured && rating){
        const assuredcategoryparams=new HttpParams().set('rating',rating)
        // console.log(notassuredparams)
        return this.http.get(`http://localhost:3000/${category}`,{params:assuredcategoryparams});
      }
      else if(category && brand && !assured && !rating){
        const assuredcategoryparams=new HttpParams().set('brandlist',brand)
        // console.log(notassuredparams)
        return this.http.get(`http://localhost:3000/${category}`,{params:assuredcategoryparams});
      }
      else if(category && !brand && assured && !rating){
        const assuredcategoryparams=new HttpParams().set('assured',true)
        // console.log(notassuredparams)
        return this.http.get(`http://localhost:3000/${category}`,{params:assuredcategoryparams});
      }
      else if(category && !brand && !assured && !rating){
        return this.http.get(`http://localhost:3000/${category}`);
      }
     else{
        return this.http.get(`http://localhost:3000/${category}`);
      }

      }



    getSubProducts(categorypath:string,subcategorypath:string,assured?:boolean,rating?:string,brand?:string){


console.log("getcat",categorypath)
console.log("getcat",subcategorypath)
console.log("getcat",assured)


    if(categorypath && subcategorypath && assured && rating && brand){
      const assuredcategoryparams=new HttpParams().set('assured',true).set('rating',rating).set('brandlist',brand)
      // console.log(notassuredparams)
      return this.http.get(`http://localhost:3000/${categorypath}/${subcategorypath}`,{params:assuredcategoryparams});
    }
    else if(categorypath && subcategorypath && !assured && rating && brand){
      const assuredcategoryparams=new HttpParams().set('rating',rating).set('brandlist',brand);
      // console.log(notassuredparams)
      return this.http.get(`http://localhost:3000/${categorypath}/${subcategorypath}`,{params:assuredcategoryparams});
    }
    else if(categorypath && subcategorypath && assured  && !rating && brand){
      const assuredcategoryparams=new HttpParams().set('assured',true).set('brandlist',brand);
      // console.log(notassuredparams)
      return this.http.get(`http://localhost:3000/${categorypath}/${subcategorypath}`,{params:assuredcategoryparams});
    }
    else if(categorypath && subcategorypath && assured && rating && !brand){
      const assuredcategoryparams=new HttpParams().set('assured',true).set('rating',rating)
      // console.log(notassuredparams)
      return this.http.get(`http://localhost:3000/${categorypath}/${subcategorypath}`,{params:assuredcategoryparams});
    }
    else if(categorypath && subcategorypath && !assured  && !rating && brand){
      const assuredcategoryparams=new HttpParams().set('brandlist',brand)
      // console.log(notassuredparams)
      return this.http.get(`http://localhost:3000/${categorypath}/${subcategorypath}`,{params:assuredcategoryparams});
    }
    else if(categorypath && subcategorypath && assured  && !rating && !brand){
      const assuredcategoryparams=new HttpParams().set('assured',true);
      // console.log(notassuredparams)
      return this.http.get(`http://localhost:3000/${categorypath}/${subcategorypath}`,{params:assuredcategoryparams});
    }
    else if(categorypath && subcategorypath && !assured  && rating && !brand){
      const assuredcategoryparams=new HttpParams().set('rating',rating);
      // console.log(notassuredparams)
      return this.http.get(`http://localhost:3000/${categorypath}/${subcategorypath}`,{params:assuredcategoryparams});
    }
    else if(categorypath && subcategorypath && !assured  && !rating && !brand){
      const assuredcategoryparams=new HttpParams();
      // console.log(notassuredparams)
      return this.http.get(`http://localhost:3000/${categorypath}/${subcategorypath}`,{params:assuredcategoryparams});
    }
   else{
    const assuredcategoryparams=new HttpParams()
    return this.http.get(`http://localhost:3000/${categorypath}/${subcategorypath}`,{params:assuredcategoryparams})
    }

    }


    }








  // obsv=new Observable((obser)=>{

  //   let count:number=0
  //   while(count<10){
  //     setInterval(()=>{
  //       obser.next(count)
  //       count++
  //     },1000)
  //   }
  // })


