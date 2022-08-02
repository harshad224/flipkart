import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toBook(){
this.router.navigateByUrl('/book')
  }
}
