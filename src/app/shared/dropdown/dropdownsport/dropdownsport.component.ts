import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownsport',
  templateUrl: './dropdownsport.component.html',
  styleUrls: ['./dropdownsport.component.scss']
})
export class DropdownsportComponent implements OnInit {

  sportcol1 = [{ name: 'Sports', headlink: '/sports', lists: ['Cricket', 'Badminton', 'Cycling', 'Football', 'Skating', 'Camping & Hiking', 'Swimming'], links: ['cricket', 'badminton', 'cycling', 'football', 'skating', 'campinghiking', 'swimming'] }]
  sportcol11 = [{ name: 'Exercise Fitness', lists: ['Cardio Equipment', 'Home Gym', 'Support', 'Dumbells', 'Ab Exercisers', 'Shakers & Sippers', 'Yoga Mat', 'Gym Gloves'] }]
  sportcol2 = [{ name: 'Food Essential', lists: ['Sport Shoes', 'Casual Shoes Formal Shoes', 'Sandals & FLoater', 'Flip-Flops', 'Loafer', 'Boots', 'Running Shoes', 'Sneakers'] }]
  sportcol21 = [{ name: 'Health & Nutrition', lists: ['Nuts & Dry Fruits', 'Tea,Coffee & Beverages', 'Chocolates', 'Snack Corners', 'Gifting Combos', 'Sweet Stores', 'Jams,Spreads & Honey', 'Breakfast Items'] }]
  sportcol3 = [{ name: 'Books', lists: ['Entrance Exam', 'Academics', 'Literature & Fiction', 'Non-Fiction', 'Young Readers', 'Self Helping', 'Preorders', 'Indian Languages'] }]
  sportcol31 = [{ name: 'Stationary', lists: ['Pens', 'Diaries', 'Card Holders', 'Desk Organizers', 'Key Chains', 'Calculators'] }]
  sportcol4 = [{ name: 'Auto Accesories', lists: ['Helmets & Riding Gears', 'Car Audio/Video', 'Car Mobile Accessories', 'Car & Bike Care', 'Vehicle Lubricants'] }]
  sportcol41 = [{ name: 'Industrial & Scientific Tools', lists: ['Industrial Measurement Device', 'Industrial Testing Devices', 'Lab & Scientific Products', 'Safety Products'] }]
  sportcol42 = [{ name: 'Medical Supplies', lists: ['Pregnancy & Fertility Kits', 'Hot Water Bags'] }]
  sportcol5 = [{ name: 'Music', lists: ['Musical Instruments', 'Music', 'Movies & TV Shows'] }]
  sportcol51 = [{ name: 'Gaming', lists: ['Gaming Console', 'Gaming Accessories', 'PS4 Games', 'Smart Glasses(VR)'] }]
  sportcol52 = [{ name: 'Grocery(Only in select cities)' }]
  constructor() { }

  ngOnInit(): void {
  }

}
