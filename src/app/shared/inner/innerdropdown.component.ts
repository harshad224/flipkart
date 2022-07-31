import { Component, OnInit } from '@angular/core';
// import {InnerDropdownService } from './innerdropdown.service';

@Component({
  selector: 'app-innerdropdown',
  templateUrl: './innerdropdown.component.html',
  styleUrls: ['./innerdropdown.component.scss']
})
export class InnerDropdownComponent implements OnInit {

  dropdowncategory: any = [{
    id: 0,
    class: 'electronic',
    name: 'Electronics',
    directive: 'appDropDown'
  },
  {
    id: 1,
    class: 'tv',
    name: 'TVs & Appliances',
    directive: 'appDropDown1'
  },
  {
    id: 2,
    class: 'men',
    name: 'Men',
    directive: 'appDropDown1'
  },
  {
    id: 3,
    class: 'women',
    name: 'Women',
    directive: 'appDropDown1'
  },
  {
    id: 4,
    class: 'baby',
    name: 'Baby & Kids',
    directive: 'appDropDown1'
  },
  {
    id: 5,
    class: 'home',
    name: 'Home & Furniture',
    directive: 'appDropDown1'
  },
  {
    id: 6,
    class: 'sport',
    name: 'Sports,Books & More',
    directive: 'appDropDown1'
  },

  ]



  // {
  //   name: ['Mobilesdsd'],
  // },
  // {
  //   name: ['Footwear'],
  // }
  //   ,
  // {
  //   name: ['Clothing'],
  // }
  // ]
  constructor() { }



  ngOnInit(): void {

    // this.dropdownSer.onFetchCategories().subscribe((data) => console.log(data))
  }

}
