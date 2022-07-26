import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})

export class DropDownDirective {

    constructor() { }

    @HostBinding('class.myclass') className: boolean = false;
    @HostBinding('style.color') colors: any;

    @HostListener('mouseover') myOver() {
        this.className = true
        this.colors = '#047BD5'
    }

    @HostListener('mouseleave') myleave() {
        this.className = false
        this.colors = 'black'
    }
}