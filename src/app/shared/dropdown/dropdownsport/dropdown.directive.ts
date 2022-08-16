import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
  selector:'[filterdropdown]'
})

export class FilterDropdownDirective{

  constructor(){}

  @HostBinding('class.filterclass') className:boolean=true

  @HostListener('click') myClick(){
    this.className=!this.className
  }
}
