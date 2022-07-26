import { Component, OnInit } from '@angular/core';
import { DropdownService } from './dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  dropdowncategory: any = [{
    id: 0,
    class: 'electronic',
    name: 'Electronics'
  },
  {
    id: 1,
    class: 'tv',
    name: 'TVs & Appliances'
  },
  {
    id: 2,
    class: 'men',
    name: 'Men'
  },
  {
    id: 3,
    class: 'women',
    name: 'Women'
  },
  {
    id: 4,
    class: 'baby',
    name: 'Baby & Kids'
  },
  {
    id: 5,
    class: 'home',
    name: 'Home & Furniture'
  },
  {
    id: 6,
    class: 'sport',
    name: 'Sports,Books & More'
  },

  ]

  constructor(private dropdownSer: DropdownService) { }



  ngOnInit(): void {

    // this.dropdownSer.onFetchCategories().subscribe((data) => console.log(data))
  }

}
