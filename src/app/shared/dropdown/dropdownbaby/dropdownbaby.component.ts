import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownbaby',
  templateUrl: './dropdownbaby.component.html',
  styleUrls: ['./dropdownbaby.component.scss']
})
export class DropdownbabyComponent implements OnInit {


  babycol1 = [{ name: 'Kids\' Clothing' }]
  babycol11 = [{ name: 'Boys\' Clothing', lists: ['T-shirts', 'Ethnic Wear', 'Shorts', 'Shirts', 'Innerwear'] }]

  babycol12 = [{ name: 'Girls\' Clothing', lists: ['Dresses & Skirts', 'Ethnic Wear', 'T-shirts & tops', 'Innerwear'] }]

  babycol13 = [{ name: 'Baby Boys\' Clothing', lists: ['Combo Sets', 'Innerwear', 'T-shirts'] }]

  babycol14 = [{ name: 'Baby Girls\' Clothing', lists: ['Combo Sets', 'Dresses & Gowns', 'Innerwear'] }]
  babycol2 = [{ name: 'Kids\' Footwear', lists: ['Combo Sets', 'Dresses & Gowns', 'Innerwear'] }]
  babycol21 = [{ name: 'Boys\' Footwear', lists: ['Sandals', 'Sport Shoes'] }]
  babycol22 = [{ name: 'Girls\' Footwear', lists: ['Flats & Bellies', 'Sport Shoes'] }]
  babycol23 = [{ name: 'Infant Footwear' }]
  babycol24 = [{ name: 'Character Shoes', lists: ['Kids\' Watches', 'Kids\' Sunglasses'] }]
  babycol25 = [{ name: 'Kids\' Winterwear' }]
  babycol26 = [{ name: 'Boys\' Winterwear', lists: ['Boys\' Sweatshirt', 'Boys\' Jackets'] }]
  babycol27 = [{ name: 'Girls\' Winterwear', lists: ['Girls\' Sweatshirt', 'Girls\' Jackets', 'Infant Winter Wear', 'Thermal'] }]
  babycol3 = [{ name: 'Toys', lists: ['Remote Control Toys', 'Educational Toys', 'Soft Toys', 'Cars & Die-Cast Vehicles', 'Outdoor Toys', 'Action Figures', 'Board Games', 'Musical Toys', 'Dolls & Doll Houses', 'Puzzles', 'S.T.E.M Toys', 'Helicopter & Drones', 'Toy Guns', 'Party Supplies'] }]
  babycol31 = [{ name: 'School Supplie', lists: ['School Bags', 'School Combo Sets', 'Lunch Box'] }]
  babycol4 = [{ name: 'Baby Care', lists: ['Diapers', 'Wipes', 'Diapering & Potty Training', 'Baby Bath,Hair & Skin Care', 'Baby Grooming', 'Baby Bathing Accessories', 'Baby Gift Sets & Combo', 'Baby Oral Care', 'Nursing & Breast Feeding', 'Baby Food', 'Baby Feeding Bottles & Accessories', 'Baby Feeding Utensils & Accessories', 'Baby Bedding', 'Baby Gear', 'Baby Medical Helath & Care', 'Baby Proofing & Safety', 'Baby Cleaners & Detergents'] }]
  babycol5 = [{ name: 'Featured Brands', lists: ['Miss & Chief', 'Barbie', 'Disney', 'The United Colors of Benetton', 'The Children\'s Place', 'US Polo', 'Flying Machine', 'Crocs', 'Puma', 'Funskool', 'Lego', 'Luvlap', 'Mamy Poko', 'Mee Mee'] }]
  constructor() { }

  ngOnInit(): void {
  }

}
