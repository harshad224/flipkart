import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {


  categories = [{ id: 0, img: '../assets/mobile.jpg', category: "Mobiles", cat: '/mobile' },
  { id: 1, img: '../assets/fashion.png', category: "Fashion", cat: '/fashion' },
  { id: 2, img: '../assets/electronic.png', category: "Electronics", cat: '/electronic' },
  { id: 3, img: '../assets/beauty.jpg', category: "Beauty", cat: '/beauty' },
  { id: 4, img: '../assets/home.jpg', category: "Home", cat: '/home' },
  { id: 5, img: '../assets/large.jpg', category: "Large", cat: '/large' },
  { id: 6, img: '../assets/furniture.jpg', category: "Furniture", cat: '/furniture' },
  { id: 7, img: '../assets/travel.jpg', category: "Travel", cat: '/travel' },
  { id: 8, img: '../assets/grocery.jpg', category: "Grocery", cat: '/grocery' }]
  constructor() { }

  ngOnInit(): void {
  }

}
