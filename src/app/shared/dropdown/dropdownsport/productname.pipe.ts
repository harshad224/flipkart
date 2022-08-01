import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name:'productname'
})

export class ProductNamePipe implements PipeTransform{

  constructor(){}

  transform(value: any, ...args: any[]) {
    const a=value.substr(0,50)
    if(value.length<50){
      return a
    }
      return a+'...'
  }

}
